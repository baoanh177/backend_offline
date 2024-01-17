const { string } = require('yup')
const model = require('../models/index')
const User = model.User

module.exports = {
    index: (req, res) => {
        if(req.session.user) {
            return res.redirect('/profile')
        }
        const msg = req.flash('msg')
        console.log(msg)
        res.render('auth/login', { req, msg })
    },
    login: async (req, res) => {
        const body = await req.validate(req.body, {
            email: string().email('Email không hợp lệ').required('Email không được để trống'),
            password: string().required('Mật khẩu không được để trống')
        })

        if(!body) {
            return res.redirect('/login')
        }

        
        const user = await User.findOne({
            where: { 
                email: body.email,
                password: body.password
            }
        })

        if(user) {
            if(!user.dataValues.status) {
                req.flash('msg', 'Tài khoản chưa được kích hoạt')
                return res.redirect('/login')
            }
            req.session.user = user
            return res.redirect('/profile')
        }
        req.flash('msg', 'Email hoặc mật khẩu không đúng')
        res.redirect('/login')
    },
    register: (req, res) => {
        const msg = req.flash('msg')
        console.log(msg)
        res.render('auth/register', { req, msg })  
    },
    handleRegister: async (req, res) => {
        const body = await req.validate(req.body, {
            username: string().required('Tên không được để trống'),
            email: string()
                .email('Email không hợp lệ')
                .required('Email không được để trống')
                .test('check-email', 'Email đã tồn tại', async value => {
                    const result = await User.findAll({
                        where: { email: value }
                    })

                    return !result.length
                }),
            password: string()
                .required('Mật khẩu không được để trống')
                .min(6, 'Mật khẩu cần tối thiểu 6 kí tự'),
            confirm: string()
                .required('Trường này không được để trống')
                .test('confirm', 'Mật khẩu không khớp', async value => {
                    return value === req.body.password
                })
        })
        if(body) {
            await User.create({ 
                username: body.username, 
                email: body.email,
                password: body.password
            })
            req.session.userEmail = body.email
            req.flash('msg', 'Đăng kí thành công!')
        }
        res.redirect('/register')
    },
    logout: (req, res) => {
        req.session.user = null
        res.redirect('/login')
    }
}
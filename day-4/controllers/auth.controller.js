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
            req.session.user = user
            return res.redirect('/profile')
        }
        req.flash('msg', 'Email hoặc mật khẩu không đúng')
        res.redirect('/login')
    },
    logout: (req, res) => {
        req.session.user = null
        res.redirect('/login')
    }
}
const { string } = require('yup')
const { User, User_device } = require('../models/index')
const DeviceDetector = require('node-device-detector')

const detector = new DeviceDetector({
    clientIndexes: true,
    deviceIndexes: true,
    deviceAliasCode: false,
})

module.exports = {
    index: async (req, res) => {
        if(req.session.user) {
            return res.redirect('/profile')
        }

        
        const user_agent = req.get("User-Agent")
        const devices = await User_device.findAll({ where: { agent: user_agent } })
        const users = []
        if(devices) {
            for(const device of devices) {
                const user = await device.getUser()
                users.push(user)
            }
            req.session.accounts = users
        }

        const msg = req.flash('msg')
        res.render('auth/login', { req, msg, users })
    },
    login: async (req, res) => {
        const last_active = req._startTime
        const user_agent = req.get("User-Agent")
        const deviceInfo = detector.detect(req.get("User-Agent"))
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
            const result = await User_device.findOne({
                where: { agent: user_agent, user_id: user.id }
            })

            if(!result) {
                await User_device.create({
                    agent: user_agent,
                    os_name: deviceInfo.os.name,
                    os_version: deviceInfo.os.version,
                    client_type: deviceInfo.client.type,
                    client_name: deviceInfo.client.name,
                    device_type: deviceInfo.device.type,
                    device_brand: deviceInfo.device.brand,
                    last_active: new Date(),
                    user_id: user.id
                })
            }else {
                User_device.update({ last_active: last_active }, { where: { agent: user_agent } })
            }
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
    },
    accounts: (req, res) => {
        const accounts = req.session.accounts
        if(!accounts) {
            return res.redirect("/login")
        }
        res.render("auth/accounts", { accounts })
    },
    handleLogin: async (req, res) => {
        const { index } = req.params
        const account = req.session.accounts[index]
        req.session.user = account
        req.flash('msg', account.username)
        res.redirect("/")
    }
}
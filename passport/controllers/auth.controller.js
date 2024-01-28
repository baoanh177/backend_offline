const sendMail = require("../utils/mail")
const { v4: uuid } = require("uuid")
const bcrypt = require("bcrypt")
const { string } = require("yup")
const { User, Provider } = require("../models/index")

module.exports = {
    login: (req, res) => {
        if(req.user) {
            return res.redirect("/")
        }
        const error = req.flash("error")
        const msg = req.flash("msg")
        res.render("auth/login", { error, msg })
    },
    forgotPassword: (req, res) => {
        const msg = req.flash("msg")
        res.render("auth/forgot-password", { req, msg })
    },
    handleSendEmail: async (req, res) => {
        const body = await req.validate(req.body, {
            email: string()
                .required("Vui lòng nhập email")
                .email("Email không hợp lệ")
                .test('check-email', "Tài khoản không tồn tại", async value => {
                    const localProvider = await Provider.findOne({
                        where: { name: "local" }
                    })
                    const user = await User.findOne({
                        where: {
                            email: value,
                            provider_id: localProvider.dataValues.id
                        }
                    })
                    if(user) req.session.userId = user.dataValues.id
                    return !!user
                })
        })
        if(!body) return res.redirect("/auth/forgot-password")

        const resetId = uuid()
        
        await sendMail(body.email, "Yêu cầu khôi phục mật khẩu", { 
            name: body.email.split("@")[0],
            resetUrl: `${req.headers.origin}/auth/reset-password/${resetId}`
        })

        req.flash("msg", "Yêu cầu đã được gửi, vui lòng kiểm tra email")

        const salt = bcrypt.genSaltSync(10)
        res.cookie("resetId", bcrypt.hashSync(resetId, salt), {
            maxAge: 1000 * 60 * 15,
            path: "/auth",
            httpOnly: true
        })
        res.redirect("/auth/forgot-password")
    },
    resetPassword: (req, res) => {
        const {id} = req.params
        if(!req.cookies.resetId || !bcrypt.compareSync(id, req.cookies.resetId)) {
            return res.redirect("/")
        }
        res.render("auth/reset-password", { req })
    },
    handleResetPassword: async (req, res) => {
        const body = await req.validate(req.body, {
            password: string()
                .required("Vui lòng nhập mật khẩu")
                .min(6, "Mật khẩu cần tối thiểu 6 kí tự"),
            confirm: string()
                .required("Vui lòng xác nhận mật khẩu")
                .test("confirm", "Mật khẩu không khớp", value => {
                    return value == req.body.password
                })
        })
        if(!body) {
            return res.redirect(`/auth/reset-password/${req.params.id}`)
        }
        const salt = bcrypt.genSaltSync(10)

        const user = await User.findOne({ where: { id: req.session.userId } })
        user.password = bcrypt.hashSync(body.password, salt)
        await user.save()
        res.clearCookie("resetId", { path: "/auth" })
        req.flash("msg", "Đổi mật khẩu thành công!")
        res.redirect("/auth/login")
    },
    logout: (req, res) => {
        req.logout(err => {})
        return res.redirect("/auth/login")
    }
}
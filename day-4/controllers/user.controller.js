const { string } = require("yup")
const { User, User_device } = require("../models/index")
const { Op } = require("sequelize");

module.exports = {
    index: (req, res) => {
        const user = req.session.user
        res.render("user/profile", { user })
    },
    editProfile: async (req, res) => {
        const user = req.session.user
        const msg = req.flash('msg')
        res.render("user/edit", { req, user, msg })
    },
    updateProfile: async (req, res) => {
        const user = req.session.user
        const body = await req.validate(req.body, {
            username: string().required("Username không được để trống!"),
            email: string().email("Email không hợp lệ!").
                test('check-email', 'Email đã tồn tại', async value => {
                    const result = await User.findAll({
                        where: { email: value, id: {
                            [Op.ne]: user.id
                        }  }
                    })

                    return !result.length
                })
        })


        if(body) {
            const hasChangeUser = await User.findOne({
                where: { id: user.id }
            })

            hasChangeUser.username = body.username
            hasChangeUser.email = body.email

            await hasChangeUser.save()

            req.session.user = hasChangeUser
            req.flash('msg', "Thay đổi thông tin thành công!")
        }

        res.redirect("/edit-profile")
    },
    editPassword: (req, res) => {
        const msg = req.flash('msg')
        const user = req.session.user
        res.render("user/password", { req, user, msg})
    },
    updatePassword: async (req, res) => {
        const user = req.session.user
        const body = await req.validate(req.body, {
            old_password: string().test('check-password', "Mật khẩu không đúng!", value => value == user.password).
                required("Trường này không được để trống!"),
            new_password: string().min(6, "Mật khẩu cần tối thiểu 6 kí tự")
                .required("Trường này không được để trống!"),
            confirm_password: string().test("confirm-password", "Mật khẩu không khớp", async value => {
                    return value == req.body.new_password
                }).required("Trường này không được để trống")
        })

        if(body) {
            await User.update({ password: body.new_password }, { where: { id: user.id } })
            await User_device.destroy({ where: { 
                agent: {
                    [Op.ne]: req.get("User-Agent")
                },
                user_id: user.id
            } })
            req.flash('msg', "Thay đổi mật khẩu thành công!")
        }

        res.redirect("/password-change")
    },
    devices: async (req, res) => {
        const msg = req.flash('msg')
        const user = req.session.user
        const user_agent = req.get("User-Agent")
        const devices = await User_device.findAll({
            where: { user_id: user.id }
        })
        res.render("user/devices", { devices, msg, user_agent })
    },
    logoutDevice: async (req, res) => {
        const { id } = req.params
        await User_device.destroy({ where: { id } })
        req.flash("msg", "Đã đăng xuất thiết bị!")
        res.redirect("/devices")
    }
}
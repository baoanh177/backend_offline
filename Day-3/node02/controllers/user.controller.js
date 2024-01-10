const userModel = require("../models/user.model")
const { string } = require('yup')

module.exports = {
    index: async (req, res, next) => {
        const msg = req.flash('msg')
        let users
        const { status, keyword } = req.query
        try {
            users = await userModel.all(status, keyword)
        }catch(e) {
            return next(e)
        }
        res.render('users/index', { users, msg })
    },
    add: (req, res) => {
        res.render("users/add", { req })
    },
    handleAdd: async (req, res) => {
        const body = await req.validate(req.body, {
            name: string().required("Tên không được để trống"),
            email: string()
                .required("Email không được để trống")
                .email("Email không đúng đinh dạng")
                .test('check-email', 'Email đã tồn tại', async email => {
                    let result
                    try{
                        result = await userModel.checkEmail(email)
                    }catch(e) {
                        next(e)
                    }
                    return !result.length
                }),
            status: string().test('check-status', 'Trạng thái không hợp lệ', value => {
                return +value === 0 || +value === 1
            })
        })

        if(!body) {
            return res.redirect("/users/add")
        }

        await userModel.postUser(body)
        req.flash('msg', 'Thêm người dùng thành công')
        return res.redirect('/users')
    },
    handleDelete: async (req, res) => {
        const id = req.params.id
        await userModel.deleteUser(id)
        req.flash('msg', 'Xóa người dùng thành công')
        res.redirect('/users')
    },
    edit: async (req, res) => {
        const id = req.params.id
        const msg = req.flash('msg')
        const [user] = await userModel.getUser(id)
        res.render('users/edit', { req, user, msg })
    },
    handleUpdate: async (req, res) => {
        const body = await req.validate(req.body, {
            name: string().required("Tên không được để trống"),
            email: string()
                .required("Email không được để trống")
                .email("Email không đúng đinh dạng")
                .test('check-email', 'Email đã tồn tại', async email => {
                    let result
                    try{
                        result = await userModel.checkEmail(email)
                    }catch(e) {
                        next(e)
                    }
                    if(result.length > 1) {
                        return false
                    }
                    if(result.length == 1 && result[0].id == req.body.id || result.length == 0) {
                        return true
                    }
                }),
            status: string().test('check-status', 'Trạng thái không hợp lệ', value => {
                return +value === 0 || +value === 1
            })
        })

        if(!body) {
            return res.redirect('/users/edit/' + req.body.id)
        }

        await userModel.updateUser(body)
        req.flash('msg', 'Lưu thông tin thành công')
        res.redirect('/users/edit/' + body.id)
    }
}
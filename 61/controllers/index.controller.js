const { string } = require("yup")
const uniqid = require('uniqid')
const QRCode = require('qrcode')
const { Link } = require("../models/index")

module.exports = {
    index: async (req, res) => {
        const error = req.flash("error")
        const success = req.flash("success")
        const msg = req.flash("msg")

        const links = await Link.findAll({ 
            where: { user_id: req.user.id },
            order: [["id", "desc"]]
        })

        const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl

        res.render("index", { req, links, error, success, msg, fullUrl } )
    },
    handleCreate: async (req, res) => {
        const body = await req.validate(req.body, {
            origin_link: string()
                .test('check-url', "Liên kết không hợp lệ", value => {
                    const urlRegex = /^(https?|http):\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/
                    return urlRegex.test(value)
                })
                .required("Không được để trống"),
            password: string()
                .min(6, "Mật khẩu cần tối thiểu 6 kí tự")
                .required("Không được để trống"),
            link_id: string().test("check_id", "ID đã tồn tại", async value => {
                if(req.body.customize_id) {
                    const check = await Link.findOne({ where: { link_id: value } })
                    return !check
                }
                return true
            }).test("check-required", "Không được để trống", value => {
                if(req.body.customize_id && value.trim() == '') {
                    return false
                }
                return true
            })
        })

        if(body) {
            await Link.create({
                origin_link: body.origin_link, 
                link_id: req.body.customize_id ? body.link_id : uniqid.time(), 
                password: body.password,
                safe_navigate: !!req.body.safe_navigation,
                clicks: 0, 
                user_id: req.user.id, 
            })
            req.flash("success", "Success")
        }

        res.redirect("/")
        // res.json(req.body)
    },
    unlock: async (req, res, next) => {
        const { id } = req.params
        const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl
        let qr = '' 

        QRCode.toString(fullUrl, {
            errorCorrectionLevel: 'H',
            type: 'svg'
        }, function(err, data) {
            if (err) throw err
            qr = data
        })

        const error = req.flash("error")
        const unlocked = req.flash("unlocked")
        
        const link = await Link.findOne({ where: { link_id: id } })
        if(!link) {
            return next(new Error("Liên kết không tồn tại"))
        }
        res.render("short/password", { error, unlocked, link, fullUrl, qr })
    },
    handleUnlock: async (req, res) => {
        const { id } = req.params
        const result = await Link.findOne({
            where: {
                link_id: id,
                password: req.body.password
            }
        })
        if(!result) {
            req.flash("error", "Mật khẩu không đúng")
        }else {
            result.clicks += 1
            await result.save()
            if(!result.safe_navigate) {
                return res.redirect(result.origin_link)
            }else {
                req.flash("unlocked", "true")
            }
        }
        return res.redirect(`/short/${id}`)
    },
    handleDelete: async (req, res) => {
        const { id } = req.params
        await Link.destroy({ where: { id } })
        req.flash("msg", "Xóa liên kết thành công")
        res.redirect("/")
    }
}
var express = require("express")
var router = express.Router()
const sendMail = require("../utils/mail")
const validateMiddleware = require("../middlewares/validate.middleware")
const { Email_history } = require("../models/index")
const { string } = require("yup")

router.use(validateMiddleware)

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", { title: "Express" })
})

router.get("/mail-form", function (req, res, next) {
    const msg = req.flash('msg')
    res.render("mail-form", { req, msg })
})

router.post("/mail-form", async (req, res) => {
    const body = await req.validate(req.body, {
        to: string().required("Trường này không được để trống").email("Email không hợp lệ"),
        title: string().required("Tiêu đề không được để trống"),
        message: string().required("Nội dung không được để trống")
    })

    
    if(body) {
        const { to, title, message } = body
        req.flash('msg', "Mail đã được gửi")
        await sendMail(to, title, message)
        await Email_history.create({
            to_email: to,
            title,
            content: message,
            sent_at: new Date(),
        })
    }
    
    res.redirect("/mail-form")
})

router.get("/mail-histories", async (req, res) => {
    const mails = await Email_history.findAll()
    res.render("histories", { mails })
})

// router.get("/track.png", async (req, res) => {
//     await Email_history.create({
//         to_email: "Emiall",
//         title: "title",
//         content: "content",
//         sent_at: new Date(),
//     })
//     console.log("Track")
//     const pixel = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAwAB/7PcjAAAAABJRU5ErkJggg==', 'base64');

//     res.set('Content-Type', 'image/png');
//     res.send(pixel)
// })

module.exports = router

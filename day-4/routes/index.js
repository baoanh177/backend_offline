var express = require("express")
var router = express.Router()
const authRouter = require("./auth")
const userRouter = require("./user")
const authMiddleware = require("../middlewares/auth.middleware")

/* GET home page. */
router.get("/", function (req, res, next) {
    const user = req.session?.user
    const msg = req.flash('msg')
    res.render("index", { user, msg })
})

router.use(authRouter)

router.use(authMiddleware)

router.use(userRouter)

module.exports = router

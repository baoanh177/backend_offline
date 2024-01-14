var express = require("express")
var router = express.Router()

const authController = require("../controllers/auth.controller")

router.get("/login", authController.index)
router.post("/login", authController.login)
router.get("/profile", (req, res) => {
    const user = req.session.user
    if(user) {
        return res.render("profile", { user })
    }
    res.redirect('/login')
})
router.get('/logout', (req, res) => {
    console.log('outt')
    res.render('auth/logout')
})
router.post('/logout', authController.logout)

module.exports = router

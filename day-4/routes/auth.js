var express = require("express")
var router = express.Router()

const authController = require("../controllers/auth.controller")

router.get("/login", authController.index)
router.post("/login", authController.login)
router.get("/accounts", authController.accounts)
router.post("/accounts/:index", authController.handleLogin)
router.get("/register", authController.register)
router.post("/register", authController.handleRegister)

router.get('/logout', (req, res) => {
    res.render('auth/logout')
})
router.post('/logout', authController.logout)

module.exports = router

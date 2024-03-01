const express = require("express")
const passport = require("passport")
const router = express.Router()
const authController = require("../controllers/auth.controller")

router.get("/login", authController.login)
router.post("/login", passport.authenticate("local", {
    failureRedirect: "/auth/login",
    failureFlash: true,
    badRequestMessage: "Vui lòng nhập email và password",
    successRedirect: "/"
}))

router.get("/google/redirect", passport.authenticate("google"))
router.get("/google/callback", passport.authenticate("google", {
    failureRedirect: "/auth/login", 
    failureFlash: true,
    successRedirect: "/"
}))

router.get("/facebook/redirect", passport.authenticate("facebook"))
router.get("/facebook/callback", passport.authenticate("facebook", {
    failureRedirect: "/auth/login", 
    failureFlash: true,
    successRedirect: "/"
}))

router.get("/forgot-password", authController.forgotPassword)
router.post("/forgot-password", authController.handleSendEmail)

router.get("/reset-password/:id", authController.resetPassword)
router.post("/reset-password/:id", authController.handleResetPassword)

router.get("/logout", authController.logout)

module.exports = router
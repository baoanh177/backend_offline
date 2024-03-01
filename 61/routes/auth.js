var express = require("express")
const authController = require("../controllers/auth.controller")
const passport = require("passport")
var router = express.Router()

/* GET users listing. */
router.get("/login", authController.index)
router.get("/google/redirect", passport.authenticate("google")) /////////
router.get("/google/callback", passport.authenticate("google", {
    failureRedirect: "/auth/login", 
    failureFlash: true,
    successRedirect: "/"
}))

router.get("/logout", authController.logout)

module.exports = router

const express = require("express")
const router = express.Router()
const authController = require("../controllers/auth.controller")
const passport = require("passport")
const userController = require("../controllers/user.controller")
const authMiddleware = require("../middlewares/auth.middleware")

router.get("/google", authController.google)
router.get(
    "/google/callback",
    passport.authenticate("google", {
        session: false,
    }),
    authController.googleCallback
)

router.get("/github", authController.github)
router.get(
    "/github/callback",
    passport.authenticate("github", {
        session: false,
    }),
    authController.githubCallback
)

router.post("/email", authController.email)

router.get("/accounts", authMiddleware, userController.accounts)
router.post("/logout", authMiddleware, authController.logout)
router.post("/register", authController.register)
router.get("/active-account", authController.activeAccount)
router.post("/active-account", authController.sendActiveLink)

module.exports = router

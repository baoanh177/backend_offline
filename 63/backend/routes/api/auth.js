const express = require("express")
const router = express.Router()
const authRouter = require("../../controllers/api/auth.controller")
const passport = require("passport")
const jwt = require("jsonwebtoken")
const { User } = require("../../models/index")
const { sign } = require("jsonwebtoken")

router.get("/google", authRouter.getGoogleRedirect)
router.get(
    "/google/callback",
    passport.authenticate("google", {
        failureRedirect: "/auth/fail",
        session: false,
    }),
    async (req, res) => {
        const { JWT_SECRET, JWT_ACCESS_TOKEN_EXPIRE, JWT_REFRESH_TOKEN_EXPIRE } = process.env
        const user = req.user
        try {
            const accessToken = sign({ userId: user.id }, JWT_SECRET, {
                expiresIn: JWT_ACCESS_TOKEN_EXPIRE,
            })
            const data = Math.random() + new Date().getTime()
            const refreshToken = jwt.sign({ data }, JWT_SECRET, {
                expiresIn: JWT_REFRESH_TOKEN_EXPIRE,
            })
            await User.update({
                refresh_token: refreshToken
            }, { where: { id: user.id } })
            res.status(200).json({
                accessToken,
                refreshToken
            })
        }catch(e) {
            console.log(e)
            res.status(500).json({
                status: 500,
                message: "Server Error"
            })
        }
    }
)

module.exports = router

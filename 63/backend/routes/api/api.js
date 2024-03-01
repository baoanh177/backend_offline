const express = require("express")
const router = express.Router()
const authApiRouter = require("./auth")
const userApiRouter = require("./user")
const jwt = require("jsonwebtoken")
const { User } = require("../../models/index")

router.post("/refresh-token", async (req, res) => {
    const response = {}
    try {
        const { JWT_SECRET, JWT_ACCESS_TOKEN_EXPIRE, JWT_REFRESH_TOKEN_EXPIRE } = process.env
        const user = await User.findOne({ where: { refresh_token: req.body.refreshToken } })

        console.log(user)
        if(!user) {
            response.status = 400
            throw new Error("Bad Request")
        }

        const newAccess = jwt.sign({ userId: user.dataValues.id }, JWT_SECRET, {
            expiresIn: JWT_ACCESS_TOKEN_EXPIRE,
        })
        const data = Math.random() + new Date().getTime()
        const newRefresh = jwt.sign({ data }, JWT_SECRET, {
            expiresIn: JWT_REFRESH_TOKEN_EXPIRE,
        })
        await User.update({
            refresh_token: newRefresh
        }, { where: { id: user.dataValues.id } })
        Object.assign(response, {
            status: 200,
            data: {
                accessToken: newAccess,
                refreshToken: newRefresh
            }
        })
    }catch(e) {
        console.log(e)
        Object.assign(response, {
            message: e.message
        })
    }
    res.status(response.status).json(response)
})
router.get('/profile', async (req, res) => {
    const [,access] = req.get("Authorization").split(' ')
    const response = {}

    try {
        const { JWT_SECRET } = process.env
        const token = jwt.verify(access, JWT_SECRET)
        const user = await User.findByPk(token.userId, {
            attributes: { exclude: ["password", "refresh_token"] }
        })
        if(!user) {
            response.status == 404
            throw new Error("User Not Found")
        }
        Object.assign(response, {
            status: 200,
            data: user
        })
    }catch(e) {
        Object.assign(response, {
            status: response.status || 500,
            message: e.message || "Server Error"
        })
    }
    res.status(response.status).json(response)
})

router.use('/auth', authApiRouter)
router.use('/users', userApiRouter)

module.exports = router
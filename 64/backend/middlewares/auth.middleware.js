const jwt = require("../utils/jwt")
const { User } = require("../models/index")

module.exports = async (req, res, next) => {
    try {
        const [,access] = req.get("Authorization").split(' ')
        const token = jwt.tokenDecode(access)
        const current = await User.findByPk(token.userId, {
            attributes: { exclude: ["password", "refresh_token"] }
        })
        const accounts = await User.findAll({
            where: { email: current.email },
            attributes: { exclude: ["password", "refresh_token"] }
        })
        if(!current) {
            throw new Error("Unauthorized")
        }
        req.user = {}
        req.user.current = current
        req.user.accounts = accounts
        next()
    }catch(e) {
        res.status(401).json({
            message: "Unauthorized"
        })
    }
}
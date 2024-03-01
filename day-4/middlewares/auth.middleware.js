const { User_device } = require("../models/index")

const authMiddleware = async (req, res, next) => {
    const user = req.session.user
    if(!user) {
        return res.redirect("/login")
    }
    const device = await User_device.findOne({ where: { agent: req.get("User-Agent"), user_id: user.id } })
    if(!device) {
        req.session.user = null
        return res.redirect("/login")
    }
    next()
}

module.exports = authMiddleware
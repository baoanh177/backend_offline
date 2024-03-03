const jwt = require("jsonwebtoken")

module.exports = {
    createAccess: (data = {}) => {
        const { JWT_SECRET, JWT_ACCESS_EXPIRE } = process.env
        const accessToken = jwt.sign(
            data,
            JWT_SECRET,
            { expiresIn: JWT_ACCESS_EXPIRE }
        )
        return accessToken
    },
    createRefresh: () => {
        const { JWT_SECRET, JWT_REFRESH_EXPIRE } = process.env
        const data = Math.random() + new Date().getTime()
        const refreshToken = jwt.sign(
            { data },
            JWT_SECRET,
            { expiresIn: JWT_REFRESH_EXPIRE }
        )
        return refreshToken
    },
    tokenDecode: data => {
        const { JWT_SECRET } = process.env
        const token = jwt.verify(data, JWT_SECRET)
        return token
    },
    createActiveToken: (data = {}) => {
        const { JWT_SECRET } = process.env
        const token = jwt.sign(
            data,
            JWT_SECRET,
            { expiresIn: 60 * 15 }
        )
        return token
    }
}
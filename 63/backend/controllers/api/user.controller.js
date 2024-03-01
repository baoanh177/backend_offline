const { User, Provider } = require("../../models/index")
const jwt = require("jsonwebtoken")

module.exports = {
    index: async (req, res) => {
        const response =  {}
        const [,access] = req.get("Authorization").split(' ')
        try {
            const { JWT_SECRET } = process.env
            const token = jwt.verify(access, JWT_SECRET)
            const users = await User.findAll({
                attributes: { exclude: ["password", "refresh_token"] },
                include: Provider
            })
            Object.assign(response, {
                status: 200,
                message: "Success",
                activeUser: token.userId,
                data: users
            })
        }catch(e) {
            console.log(e)
            Object.assign(response, {
                status: 401,
                message: "Unauthorize"
            })
        }
        res.status(response.status).json(response)
    },
    findOne: async (req, res) => {
        const { id } = req.params
        const [,access] = req.get("Authorization").split(' ')
        const response = {}

        try {
            const { JWT_SECRET } = process.env
            jwt.verify(access, JWT_SECRET)
            const user = await User.findByPk(id, {
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
    }
}
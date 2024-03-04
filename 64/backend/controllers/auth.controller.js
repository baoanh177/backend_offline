const passport = require("passport")
const response = require("../utils/response")
const { ServerResponse } = require("http")
const jwt = require("../utils/jwt")
const { User, Black_token } = require("../models/index")
const { string, object } = require("yup")
const sendMail = require("../utils/mail")
const bcrypt = require("bcrypt")
const { Op } = require("sequelize")

module.exports = {
    google: async (req, res) => {
        const emptyResponse = new ServerResponse(req)

        passport.authenticate(
            "google",
            { scope: ["profile", "email"], session: false },
            (err, user, info) => {
                console.log(err, user, info)
            }
        )(req, emptyResponse)

        const url = emptyResponse.getHeader("location")
        response.success(res, 200, "Success", url)
    },
    googleCallback: async (req, res) => {
        try {
            const accessToken = jwt.createAccess({ userId: req.user.id })
            const refreshToken = jwt.createRefresh()
            req.user.refresh_token = refreshToken
            req.user.save()
            response.success(res, 200, "Success", { accessToken, refreshToken })
        } catch (e) {
            response.error(res, 500, e.message || "Server Error")
        }
    },
    github: async (req, res) => {
        const emptyResponse = new ServerResponse(req)

        passport.authenticate(
            "github",
            { scope: ["profile", "email"], session: false },
            (err, user, info) => {
                console.log(err, user, info)
            }
        )(req, emptyResponse)

        const url = emptyResponse.getHeader("location")
        response.success(res, 200, "Success", url)
    },
    githubCallback: async (req, res) => {
        try {
            const accessToken = jwt.createAccess({ userId: req.user.id })
            const refreshToken = jwt.createRefresh()
            req.user.refresh_token = refreshToken
            req.user.save()
            response.success(res, 200, "Success", { accessToken, refreshToken })
        } catch (e) {
            response.error(res, 500, e.message || "Server Error")
        }
    },
    register: async (req, res) => {
        let passwordError = null
        try {
            const schema = object({
                email: string().required().email(),
                password: string()
                    .required()
                    .test("check-password", "", (value) => {
                        if (value.trim().length < 6) {
                            passwordError = "Mật khẩu cần tối thiểu 6 kí tự"
                            return false
                        }
                        return true
                    }),
            })
            await schema.validate(req.body)
        } catch (e) {
            return response.error( res, 400, "Bad Request", 
                passwordError && { password: passwordError } 
            )
                
        }
        try {
            const user = await User.findOne({
                where: { email: req.body.email, provider: "local" },
            })
            if (user)
            return response.error(res, 400, "Bad Request", {
                    email: "Email đã tồn tại",
                })

            const newUser = await User.create({
                name: req.body.email.split("@").at(0),
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10)),
                provider: "local",
                status: false
            })
            if(!newUser) return response.error(res, 500, "Server Error")
            const activeToken = jwt.createActiveToken({ userId: newUser.id, activeAccount: true })
            await sendMail(req.body.email, "Kích hoạt tài khoản", activeToken)
            response.success(res, 200, "Success")
        }catch(e) {
            response.error(res, 500, "Server Error")
        }
    },
    email: async (req, res) => {
        try {
            const user = await User.findOne({
                where: {
                    email: req.body.email,
                    provider: "local"
                }
            })
            if(!user) return response.error(res, 400, "Bad Request", "Account Not Found")
            if(!bcrypt.compareSync(req.body.password, user.password)) {
                return response.error(res, 400, "Bad Request", "Mật khẩu không đúng")
            }
            if(!user.status) return response.error(res, 403, "Bad Request", "Chua duoc active")

            const accessToken = jwt.createAccess({ userId: req.user.id })
            const refreshToken = jwt.createRefresh()
            req.user.refresh_token = refreshToken
            req.user.save()
            response.success(res, 200, "Success", { accessToken, refreshToken })
        } catch (e) {
            response.error(res, 500, e.message || "Server Error")
        }
    },
    refreshToken: async (req, res) => {
        const refresh = req.body.refresh_token
        if (!refresh) return response.error(res, 400, "Bad Request")
        try {
            const blackRefresh = await Black_token.findOne({
                where: { refresh_token: refresh },
            })
            if (blackRefresh) return response.error(res, 401, "Unauthorized")
            jwt.tokenDecode(refresh)
            const newAccess = jwt.createAccess({ userId: req.user.current.id })
            const newRefresh = jwt.createRefresh()
            await Black_token.create({
                refresh_token: refresh,
            })
            response.success(res, 200, "Success", {
                accessToken: newAccess,
                refreshToken: newRefresh,
            })
        } catch (e) {
            console.log(e)
            response.error(res, 500, "Server Error")
        }
    },
    activeAccount: async (req, res) => {
        const { id } = req.query
        try {
            const data = jwt.tokenDecode(id)
            if(!data.activeAccount) return response.error(res, 400, "Bad Request")
            await User.update({
                status: true
            }, { where: { id: data.userId } })
            res.end(`<h1>Active roi</h1><a href='${process.env.CLIENT_ORIGIN}/login'>Go home</a>`)
        }catch(e) {
            console.log(e)
            response.error(res, 400, "Bad Request")
        }
    },
    logout: async (req, res) => {
        console.log(req.body)
        if (!req.body.refresh_token)
            return response.error(res, 400, "Bad Request")
        await Black_token.create({ refresh_token: req.body.refresh_token })
        response.success(res, 200, "Success")
    },
    sendActiveLink: async (req, res) => {
        const user = await User.findOne({
            where: {
                email: req.body.email,
                status: {
                    [Op.or]: null,
                    [Op.or]: false,
                },
                provider: "local"
            }
        })
        if(!user) return response.error(res, 400, "Bad Request", "User không tồn tại")
        const activeToken = jwt.createActiveToken({ userId: user.id, activeAccount: true })
        await sendMail(req.body.email, "Kích hoạt tài khoản", activeToken)
        response.success(res, 200, "Success")
    }
}

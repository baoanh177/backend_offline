const { ServerResponse } = require("http")
const passport = require("passport")

module.exports = {
    getGoogleRedirect: (req, res, next) => {
        const emptyResponse = new ServerResponse(req)

        passport.authenticate("google", 
            { scope: ["profile", "email"], session: false },
            (err, user, info) => {
                console.log(err, user, info)
            }
        )(req, emptyResponse)

        const url = emptyResponse.getHeader("location")
        return res.status(200).json({
            status: 200,
            message: "Success",
            data: url
        })
    }
}
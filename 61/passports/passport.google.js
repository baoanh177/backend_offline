require("dotenv").config()
const { User } = require("../models/index")

const GoogleStrategy = require("passport-google-oauth2").Strategy

module.exports = new GoogleStrategy(
    {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK_URL,
        scope: ["profile", "email"]
    },
    async function (request, accessToken, refreshToken, profile, done) {
        const [user] = await User.findOrCreate({
            where: {
                email: profile.email
            },
            defaults: {
                name: profile.displayName,
                email: profile.email
            }
        })
        return done(null, user)
    }
)

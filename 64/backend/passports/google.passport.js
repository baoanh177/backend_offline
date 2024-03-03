const GoogleStrategy = require("passport-google-oauth2").Strategy
const { User } = require("../models/index")

module.exports = new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL,
    scope: ["profile", "email"],
}, async (request, accessToken, refreshToken, profile, done) => {
    const [user] = await User.findOrCreate({
        where: { email: profile.email, provider: profile.provider },
        defaults: {
            name: profile.displayName,
            email: profile.email,
            password: profile.password,
            image: profile.picture,
            provider: profile.provider
        }
    })
    done(null, user)
})

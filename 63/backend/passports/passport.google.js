require("dotenv").config()
const { User, Provider } = require("../models/index")
const GoogleStrategy = require("passport-google-oauth2").Strategy

module.exports = new GoogleStrategy(
    {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK_URL,
        scope: ["profile", "email"]
    },
    async (request, accessToken, refreshToken, profile, done) => {
        // console.log("passport.google 13", profile)
        // console.log({name: profile.displayName, email: profile.email, provider: })
        let provider = await Provider.findOne({ where: { name: profile.provider } })
        if(!provider) {
            provider = await Provider.create({ name: profile.provider })
        }
        // const res = await Provider.findOne({ where: { name: profile.provider } })
         
        const [user] = await User.findOrCreate({
            where: {
                email: profile.email,
                provider_id: provider.dataValues.id
            },
            defaults: {
                name: profile.displayName,
                email: profile.email,
                status: true,
                provider_id: provider.dataValues.id
            }
        })
        return done(null, user)
    }
)

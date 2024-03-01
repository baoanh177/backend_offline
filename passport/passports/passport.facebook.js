require("dotenv").config()
const { User, Provider } = require("../models/index")
const FacebookStrategy = require("passport-facebook").Strategy

module.exports = new FacebookStrategy(
    {
        clientID: process.env.FACEBOOK_APP_ID,
        clientSecret: process.env.FACEBOOK_APP_SECRET,
        callbackURL: process.env.FACEBOOK_CALLBACK_URL,
        passReqToCallback : true,
        profileFields: ['id', 'displayName', 'photos', 'email'],
        scope: ["public_profile", "email"]
    },
    async (request, accessToken, refreshToken, profile, done) => {
        console.log(profile.emails[0].value)
        let provider = await Provider.findOne({ where: { name: profile.provider } })
        if(!provider) {
            provider = await Provider.create({ name: profile.provider })
        }
        // const res = await Provider.findOne({ where: { name: profile.provider } })
         
        const [user, created] = await User.findOrCreate({
            where: {
                email: profile.emails[0].value,
                provider_id: provider.dataValues.id
            },
            defaults: {
                name: profile.displayName,
                email: profile.emails[0].value,
                status: true,
                provider_id: provider.dataValues.id
            }
        })
        console.log({user, created})
        return done(null, user)
    }
)

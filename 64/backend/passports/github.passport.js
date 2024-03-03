const GithubStrategy = require("passport-github2").Strategy
const { User } = require("../models/index")

module.exports = new GithubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: process.env.GITHUB_CALLBACK_URL,
    scope: ["profile", "email"],
}, async (request, accessToken, refreshToken, profile, done) => {
    console.log(profile)
    const [user] = await User.findOrCreate({
        where: { name: profile.displayName, provider: profile.provider },
        defaults: {
            name: profile.displayName || profile.username,
            email: profile.email,
            password: profile.password,
            image: profile.photos.at(0).value,
            provider: profile.provider
        }
    })
    done(null, user)
})

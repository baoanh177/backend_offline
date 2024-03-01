const { User, Provider } = require("../models/index")
const bcrypt = require("bcrypt")

const LocalStrategy = require("passport-local").Strategy

module.exports = new LocalStrategy({
    usernameField: "email",
    passwordField: "password"
},
async (email, password, done) => {
    const [localProvider] = await Provider.findOrCreate({ where: { name: 'local' } })
    const user = await User.findOne({
        where: {
            email,
            provider_id: localProvider.dataValues.id
        }
    })
    if(!user) {
        return done(null, false, {
            message: "Tài khoản không tồn tại"
        })
    }
    if(!bcrypt.compareSync(password, user.password)) {
        return done(null, false, {
            message: "Mật khẩu không chính xác"
        })
    }
    return done(null, user)
})
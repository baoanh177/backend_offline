// const { User } = require("../models/index")
// const bcrypt = require("bcrypt")

// const LocalStrategy = require("passport-local").Strategy

// module.exports = new LocalStrategy({
//     usernameField: "email",
//     passwordField: "password"
// },
// async (email, password, done) => {
    
//     console.log(user)
//     // if(!user.status) return done(null, false, {
//     //     message: "Tài khoản chưa được kích hoạt"
//     // })
//     if(!user) {
//         return done(null, false, {
//             message: "Tài khoản không tồn tại"
//         })
//     }
//     if(!bcrypt.compareSync(password, user.password)) {
//         return done(null, false, {
//             message: "Mật khẩu không chính xác"
//         })
//     }
//     return done(null, user)
// })
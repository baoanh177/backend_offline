var createError = require("http-errors")
var express = require("express")
var path = require("path")
var cookieParser = require("cookie-parser")
var logger = require("morgan")
const passport = require("passport")
const passportGoogle = require("./passports/passport.google")
const { User, Provider } = require("./models/index")
const cors = require("cors")

var indexRouter = require("./routes/index")
const apiRouter = require("./routes/api/api")

var app = express()

// view engine setup
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

passport.serializeUser(function (user, done) {
    console.log(user)
    done(null, user.id)
})

passport.deserializeUser(async function (id, done) {
    const user = await User.findByPk(id)
    console.log(user)
    done(null, user)
})

passport.use("google", passportGoogle)

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))

app.use("/api", cors(), apiRouter)
app.use("/", indexRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message
    res.locals.error = req.app.get("env") === "development" ? err : {}

    // render the error page
    res.status(err.status || 500)
    res.render("error")
})

module.exports = app

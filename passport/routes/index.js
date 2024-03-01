var express = require("express")
var router = express.Router()
const userController = require("../controllers/user.controller")
const roleRouter = require("./roles")
// const layout2 = require("../views/layout2.ejs")

/* GET home page. */
// router.use(layout2)
router.get("/", function (req, res, next) {
    res.render("index", { req, layout: "layouts/admin-layout" })
})

router.get("/users", userController.index)
router.use("/roles", roleRouter)


module.exports = router

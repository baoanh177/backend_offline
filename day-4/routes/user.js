var express = require("express")
var router = express.Router()
const userController = require("../controllers/user.controller")

router.get("/profile", userController.index)
router.get("/edit-profile", userController.editProfile)
router.post("/edit-profile", userController.updateProfile)
router.get("/password-change", userController.editPassword)
router.post("/password-change", userController.updatePassword)
router.get("/devices", userController.devices)
router.post("/devices/:id", userController.logoutDevice)

module.exports = router

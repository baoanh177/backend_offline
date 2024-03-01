const express = require("express")
const router = express.Router()
const userController = require("../../controllers/api/user.controller")

router.get("/", userController.index)
router.get("/:id", userController.findOne)

module.exports = router
var express = require("express")
var router = express.Router()
const roleController = require("../controllers/role.controller")

router.get("/", roleController.index)
router.get("/add", roleController.add)
router.post("/add", roleController.handleAdd)
router.post("/edit", roleController.edit)
// router.post("/edit", roleController.handleEdit)

module.exports = router

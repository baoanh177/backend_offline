var express = require("express")
const indexController = require("../controllers/index.controller")
var router = express.Router()

/* GET home page. */
router.get("/", indexController.index)
router.post("/",indexController.handleCreate)
router.get("/short/:id", indexController.unlock)
router.post("/short/:id", indexController.handleUnlock)
router.post("/delete/:id", indexController.handleDelete)

module.exports = router

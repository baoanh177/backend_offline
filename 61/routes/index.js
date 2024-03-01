var express = require("express")
const indexController = require("../controllers/index.controller")
const authMiddleware = require("../middlewares/auth.middleware")
var router = express.Router()

/* GET home page. */
router.get("/", authMiddleware, indexController.index)
router.post("/", authMiddleware, indexController.handleCreate)
router.get("/short/:id", indexController.unlock)
router.post("/short/:id", indexController.handleUnlock)
router.post("/delete/:id", indexController.handleDelete)

module.exports = router

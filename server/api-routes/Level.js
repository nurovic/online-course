// const validate = require("../middlewares/validate")
// const authenticate = require("../middlewares/authenticate")
// const schemas = require("../validations/Courses")
const express = require("express")      
const LevelController = require("../controllers/Level")
const router = express.Router()
 
router.route("/").post(LevelController.create)
router.route("/").get(LevelController.index)
router.route("/:id").get(LevelController.findOne)


module.exports = router
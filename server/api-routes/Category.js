// const validate = require("../middlewares/validate")
// const authenticate = require("../middlewares/authenticate")
// const schemas = require("../validations/Courses")
const express = require("express")      
const CategoryController = require("../controllers/Category")
const router = express.Router()
 
router.route("/").post(CategoryController.create)
router.route("/").get(CategoryController.index)
router.route("/:id").get(CategoryController.findOne)


module.exports = router
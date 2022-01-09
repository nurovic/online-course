// const validate = require("../middlewares/validate")
// const authenticate = require("../middlewares/authenticate")
// const schemas = require("../validations/Courses")
const express = require("express")      
const CategoryController = require("../controllers/Category")
const router = express.Router()
 
router.route("/").post(CategoryController.create)
router.route("/").get(CategoryController.index)
router.route("/:id").get(CategoryController.findOne)
// router.route("/").post(authenticate, validate(schemas.createValidation), CourseController.create)
// router.route("/:id").patch(authenticate, validate(schemas.updateValidation), CourseController.update)
// router.route("/:id").delete(authenticate, CourseController.deleteCourse)

module.exports = router
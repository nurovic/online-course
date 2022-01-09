// const validate = require("../middlewares/validate")
// const authenticate = require("../middlewares/authenticate")
// const schemas = require("../validations/Courses")
const express = require("express")      
const LevelController = require("../controllers/Level")
const router = express.Router()
 
router.route("/").post(LevelController.create)
router.route("/").get(LevelController.index)
router.route("/:id").get(LevelController.findOne)
// router.route("/").post(authenticate, validate(schemas.createValidation), CourseController.create)
// router.route("/:id").patch(authenticate, validate(schemas.updateValidation), CourseController.update)
// router.route("/:id").delete(authenticate, CourseController.deleteCourse)

module.exports = router
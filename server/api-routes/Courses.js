const validate = require("../middlewares/validate")
const authenticate = require("../middlewares/authenticate")
const schemas = require("../validations/Courses")
const express = require("express")      
const CourseController = require("../controllers/Course")
const router = express.Router()
 
router.route("/").get(authenticate, CourseController.index)
router.route("/").post(authenticate, CourseController.create)
router.route("/:id").patch(authenticate, validate(schemas.updateValidation), CourseController.update)
router.route("/:id").delete(authenticate, CourseController.deleteCourse)

router.route("/:id").get(authenticate, CourseController.findOne)
router.route("/:id/members").get(authenticate, CourseController.membersList)

router.route("/:id/projects").get(CourseController.projectList)

router.route("/:id/make-comment").post(authenticate, validate(schemas.commentValidation), CourseController.makeComment)
router.route("/:id/:commentId").delete(authenticate, CourseController.deleteComment)


module.exports = router
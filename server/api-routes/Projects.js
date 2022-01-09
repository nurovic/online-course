const validate = require("../middlewares/validate")
const authenticate = require("../middlewares/authenticate")
const schemas = require("../validations/Projects")
const express = require("express")      
const ProjectController = require("../controllers/Project")
const router = express.Router()
 

router.route("/").get(authenticate, ProjectController.index)
router.route("/").post(authenticate, validate(schemas.createValidation), ProjectController.create)
router.route("/:id").patch(authenticate, validate(schemas.updateValidation), ProjectController.update)
router.route("/:id").delete(authenticate, ProjectController.deleteProject)

router.route("/:id").get(authenticate, ProjectController.findOne)


module.exports = router
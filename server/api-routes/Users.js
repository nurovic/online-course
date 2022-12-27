const validate = require("../middlewares/validate")
const schemas = require("../validations/Users")
const authenticate = require("../middlewares/authenticate")
const express = require("express") 
const UserController = require("../controllers/User")
const router = express.Router()

router.route("/").get(UserController.index)
router.route("/:id").get(UserController.findOne)
router.route("/").post(validate(schemas.createValidation), UserController.create)
router.route("/").patch(authenticate,validate(schemas.updateValidation), UserController.update)
router.route("/change-password").post(authenticate, validate(schemas.changePasswordValidation), UserController.changePassword)
router.route("/reset-password").post(UserController.resetPassword)  
router.route("/update-profile-image").post(authenticate, UserController.updateProfileImage)
router.route("/profile/:id").get(authenticate, UserController.profile)

router.route("/login").post(UserController.login)

router.route("/:id").delete( UserController.deleteUser)

module.exports = router
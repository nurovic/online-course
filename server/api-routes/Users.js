const validate = require("../middlewares/validate")
const schemas = require("../validations/Users")
const authenticate = require("../middlewares/authenticate")
const express = require("express") 
const UserController = require("../controllers/User")
const router = express.Router()

const multer = require('multer');

const storage = multer.diskStorage({}); // tmp klasörü burada yaratılıyor

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb('invalid image file!', false);
  }
};
const uploads = multer({ storage, fileFilter });

router.route("/").get(UserController.index)
router.route("/").post(validate(schemas.createValidation), UserController.create)
router.route("/").patch(authenticate,validate(schemas.updateValidation), UserController.update)
router.route("/change-password").post(authenticate, validate(schemas.changePasswordValidation), UserController.changePassword)
router.route("/reset-password").post(UserController.resetPassword)
// router.route("/update-profile-image").post(authenticate, UserController.updateProfileImage)
router.route("/update-profile-image").post(authenticate , uploads.single('profile'), UserController.updateProfileImage)


// router.route("/order-carts").get(authenticate, UserController.orderCarts)
// router.route("/projects").get(authenticate, UserController.projectList)

router.route("/login").post(validate(schemas.loginValidation), UserController.login)

router.route("/:id").delete( UserController.deleteUser)

module.exports = router
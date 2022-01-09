// const validate = require("../middlewares/validate")
const authenticate = require("../middlewares/authenticate")
// const schemas = require("../validations/Courses")
const express = require("express")      
const MoviesController = require("../controllers/Movies")
const router = express.Router()
 
// const multer = require('multer');Zz

// const storage = multer.diskStorage({}); // tmp klasörü burada yaratılıyor

// const fileFilter = (req, file, cb) => {
//   if (file.mimetype.startsWith('movie')) {
//     cb(null, true);
//   } else {
//     cb('invalid image file!', false);
//   }
// };
// const uploads = multer({ storage, fileFilter });

// router.route("/").get(authenticate, MoviesController.index)
router.route("/").get(authenticate,  MoviesController.index)
router.route("/:id").get(authenticate,  MoviesController.findOne)
router.route("/").post(authenticate,  MoviesController.create)
router.route("/:id").delete(authenticate, MoviesController.deleteMovies)
// router.route("/:id").patch(authenticate, validate(schemas.updateValidation), CourseController.update)




module.exports = router
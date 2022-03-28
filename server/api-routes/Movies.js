// const validate = require("../middlewares/validate")
const authenticate = require("../middlewares/authenticate")
// const schemas = require("../validations/Courses")
const express = require("express")      
const MoviesController = require("../controllers/Movies")
const router = express.Router()


router.route("/").get(authenticate,  MoviesController.index)
router.route("/:id").get(authenticate,  MoviesController.findOne)
router.route("/").post(authenticate,  MoviesController.create)
router.route("/:id").delete(authenticate, MoviesController.deleteMovies)




module.exports = router
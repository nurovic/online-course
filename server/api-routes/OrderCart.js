// const validate = require("../middlewares/validate")
const authenticate = require("../middlewares/authenticate")
// const schemas = require("../validations/Projects")
const express = require("express")      
const CartController = require("../controllers/OrderCart")
const router = express.Router()

router.route("/").post(authenticate, CartController.create)
router.route("/").get(authenticate,   CartController.index)
router.route("/:id").delete(authenticate, CartController.deleteOrder)
router.route("/payment").post(authenticate, CartController.payment)

module.exports = router
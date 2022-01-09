const httpStatus = require("http-status")
const {ordercart, order} = require("../models/Courses")
const CourseService = require("../services/CourseService")
const ProjectService = require("../services/ProjectService")
const UserService = require("../services/UserService")
const OrderCartService = require("../services/OrderCartService")

// const OrderCart = require("../models/OrderCart")
class OrderCart {
    index(req,res){
        req.body.user_id = req.user
        OrderCartService
        .list(req.body)
        .then((response) => {
            res.status(httpStatus.OK).send(response)
        }).catch((e) => res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e))
    }

    async create(req, res) {
        req.body.user_id = req.user

        OrderCartService
            .create(req.body)
            .then((response) => {                
                UserService.update({_id: req.user._id}, {$push: { learnings: req.body.course_id}}).then()
                CourseService.findOne({_id: req.body.course_id}).then((a) => { //find course
                    let members = a._id.toString() // find course id
                    let userId = req.body.user_id._id.toString()
                    CourseService.update({_id: members}, {$push: { members: userId}}).then() // pushed members to course
                })              
                res.status(httpStatus.CREATED).send(response)
            })
            .catch((e) => {
                res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e)
                
            })
    }

    deleteOrder(req, res){
        OrderCartService.delete(req.params?.id)
        .then((deleteOrder) => {
            if(!deleteOrder) {
                return res.status(httpStatus.NOT_FOUND).send({
                    message:"This order not found"
                })
            }
            res.status(httpStatus.OK).send({
                message:"Order Deleted"
            })
        }).catch(e => res.status(httpStatus.INTERNAL_SERVER_ERROR).send({message:"Error occured while delete order"}))
    }

    payment(req,res) {
        // will initialize Stripe after frontEnd    
        // https://github.dev/sk-Jahangeer/node-stripe-payment-gateway    
        //https://github.dev/safak/youtube/blob/node-shop-api/routes/stripe.js
    }

}

module.exports = new OrderCart()
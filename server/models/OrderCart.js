const Mongoose = require("mongoose")

// const OrderSchema = new Mongoose.Schema(
//      {        
//       course_id: {
//           type: Mongoose.Schema.Types.ObjectId,
//           ref:'course',
//           autopopulate:{maxDepth:1, select:"_id full_name price description"}
//       },
//       full_name: String,
//       price: String
         
// }
// )

// const order = Mongoose.model("order", OrderSchema)



const OrderCartSchema = new Mongoose.Schema({
    course_id: 
        {
        type: Mongoose.Schema.Types.ObjectId,
        ref:'course',
        autopopulate:{maxDepth:2, select:"course_name, user_id price, full_name, "},
        }
,   
    user_id:
        {
        type: Mongoose.Schema.Types.ObjectId,
        ref:'user',
        autopopulate:{maxDepth:1, select:"full_name"}
        },
        desc: String
        

},
{timestamps: true, versionKey:false}
)


OrderCartSchema.plugin(require('mongoose-autopopulate'))
module.exports = Mongoose.model("ordercart", OrderCartSchema)


// module.exports = {order, orderCart}
// const OrderCart = new Mongoose.Schema({
//     price: String,
//     course_id:[
//             {
//                 course_id: {
//                     type: Mongoose.Schema.Types.ObjectId,
//                     ref:'course',
//                     autopopulate:{maxDepth:1, select:"_id full_name price description"}
//                 }
//             }
//         ],
//         user_id:
//         {
//         type: Mongoose.Schema.Types.ObjectId,
//         ref:'user',
//         autopopulate:{maxDepth:1, select:"full_name"}
//         },
        

// },
// {timestamps: true, versionKey:false}
// )

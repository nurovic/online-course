const Mongoose = require("mongoose")



const OrderCartSchema = new Mongoose.Schema({
    course_id: 
        {
        type: Mongoose.Schema.Types.ObjectId,
        ref:'course',
        autopopulate:{maxDepth:1, select:"course_name price cover"},
        }
,   
    user_id:
        {
        type: Mongoose.Schema.Types.ObjectId,
        ref:'user',
        autopopulate:{maxDepth:1, select:"full_name"}
        },
        

},
{timestamps: true, versionKey:false}
)


OrderCartSchema.plugin(require('mongoose-autopopulate'))
module.exports = Mongoose.model("ordercart", OrderCartSchema)


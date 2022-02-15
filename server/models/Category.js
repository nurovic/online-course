const Mongoose = require("mongoose")

const CategorySchema = new Mongoose.Schema(
        {
            name:String,
            course:[
                {
                type: Mongoose.Schema.Types.ObjectId,
                ref:'course',
                autopopulate:{maxDepth:1, select:"course_name user_id price cover"}
                }
            ],
        },
{versionKey:false}
)

CategorySchema.plugin(require('mongoose-autopopulate'))
module.exports =  Mongoose.model("category", CategorySchema)

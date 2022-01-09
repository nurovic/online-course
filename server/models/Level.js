const Mongoose = require("mongoose")

const LevelSchema = new Mongoose.Schema(
        {
            level:String,
            course:[
                {
                type: Mongoose.Schema.Types.ObjectId,
                ref:'course',
                autopopulate:{maxDepth:1, select:"course_name user_id"}
                }
            ],
        },
{versionKey:false}
)
LevelSchema.plugin(require('mongoose-autopopulate'))
module.exports =  Mongoose.model("level", LevelSchema)

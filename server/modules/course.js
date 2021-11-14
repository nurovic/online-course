const mongoose = require("mongoose")
const Schema = mongoose.Schema;


const CourseSchema = new Schema ({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        autopopulate: { maxDepth: 1 }
      },
    projectName:String,
    title:String,
    poster:String,
    level:String,
    movie:String,
    // trailer:String,
    description:String,
    price:Number,
    rating:[],
    // category: {type:Schema.Types.ObjectId, ref:"Category"},

    
})

CourseSchema.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model("Course", CourseSchema)
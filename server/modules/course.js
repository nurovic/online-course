const mongoose = require("mongoose")
const Schema = mongoose.Schema;


const CourseSchema = new Schema ({
    user: {type:Schema.Types.ObjectId, ref:"User"},
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

module.exports = mongoose.model("Course", CourseSchema)
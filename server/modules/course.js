const mongoose = require("mongoose")
const Schema = mongoose.Schema;


const CourseSchema = new Schema ({
    projectName:String,
    title:String,
    poster:String,
    level:String,
    movie:Object,
    // trailer:String,
    description:String,
    price:Number,
    rating:[],
    category: {type:Schema.Types.ObjectId, ref:"Category"},
    owner: {type: Schema.Types.ObjectId, ref:"Master"},

    
})

// Category genel özele geçecek sekilde olmallı - web development => JS , HTML vs

module.exports = mongoose.model("Course", CourseSchema)
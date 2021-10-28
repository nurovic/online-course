const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const MasterSchema = new Schema ({
    profilePhoto: String,
    name: String,
    about: String,
    Contact:String,
    email:{type: String, unique:true, required:true},
    password:{type: String, unique:true, required:true},
    courses: {type: Schema.Types.ObjectId, ref:"Course"}
})

module.exports = mongoose.model("Master", MasterSchema)
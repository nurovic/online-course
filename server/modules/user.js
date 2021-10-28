const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    name: String,
    email:{type: String, unique:true, required:true},
    password:{type: String, unique:true, required:true},
    courses: []
})

module.exports = mongoose.model("User", UserSchema)
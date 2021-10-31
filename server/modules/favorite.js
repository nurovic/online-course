const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const FavoriteSchema = new Schema ({
    courseID: {type: Schema.Types.ObjectId, ref: "Course"}
 })

module.exports = mongoose.model("Favorite", FavoriteSchema)
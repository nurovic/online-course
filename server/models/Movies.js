const Mongoose = require("mongoose")

const MoviesSchema = new Mongoose.Schema({
    title: String,
    movie: String,
    cloudinary_id: String

},
{versionKey:false}
)

MoviesSchema.plugin(require('mongoose-autopopulate'))

module.exports =  Mongoose.model("movies", MoviesSchema)
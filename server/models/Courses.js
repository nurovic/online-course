const Mongoose = require("mongoose")

const CourseSchema = new Mongoose.Schema({
    course_name: String,
    price: Number,
    description: String,
    cover: String,
    cover_cloudinary_id: String,
    file: [{
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'movies',
        autopopulate: { maxDepth: 1 }

    }],
    user_id:
    {
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'user',
        autopopulate: { maxDepth: 1, select: "full_name" }
    },

    comments: [
        {
            comment: String,
            commened_at: Date,
            user_id: {
                type: Mongoose.Schema.Types.ObjectId,
                ref: 'user',
                autopopulate: { maxDepth: 2, select: "full_name email profile_image" }
            },
        }

    ],

    members: [
        {

            type: Mongoose.Schema.Types.ObjectId,
            ref: 'user',
            autopopulate: { maxDepth: 1, select: "full_name" }

        }
    ],
    project_id:

    {
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'project',
        autopopulate: { maxDepth: 1, select: "project_file user_id" }
    },
    category: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'category',
        autopopulate: { maxDepth: 1 }
    },
    level: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'level',
        autopopulate: { maxDepth: 1 }
    }
},
    { timestamps: true, versionKey: false }
)

CourseSchema.plugin(require('mongoose-autopopulate'))

module.exports = Mongoose.model("course", CourseSchema)
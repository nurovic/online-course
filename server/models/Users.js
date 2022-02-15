const Mongoose = require("mongoose")

const UserSchema = new Mongoose.Schema({
    full_name: String,
    password: String,
    email: String,
    profile_image: String,
    learnings: [{
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'course',
        autopopulate: { maxDepth: 1, select: "course_name description" }
    }],
    created_projects:
        [{
            type: Mongoose.Schema.Types.ObjectId,
            ref: 'project',
            autopopulate: { maxDepth: 1, select: "project_file comment" }
        }
        ]


},
    { timestamps: true, versionKey: false }
)

UserSchema.plugin(require('mongoose-autopopulate'))
module.exports = Mongoose.model("user", UserSchema) 
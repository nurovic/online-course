const Mongoose = require("mongoose");

const ProjectSchema = new Mongoose.Schema(
  {
    project_file: String,
    comment: String,
    createdBy: {
      type: Mongoose.Schema.Types.ObjectId,
      ref: "user",
      autopopulate: { maxDepth: 1, select: "full_name" },
    },
    course_id: {
      type: Mongoose.Types.ObjectId,
      ref: "course",
      autopopulate: { maxDepth: 1, select: "course_name description" },
    },
  },
  { timestamps: true, versionKey: false }
);

ProjectSchema.plugin(require("mongoose-autopopulate"));

module.exports = Mongoose.model("project", ProjectSchema);

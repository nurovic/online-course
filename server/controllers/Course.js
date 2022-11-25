const httpStatus = require("http-status")
const CourseService = require("../services/CourseService")
const ProjectService = require("../services/ProjectService")
const CategoryService = require("../services/CategoryService")
const UserService = require("../services/UserService")
const LevelService = require("../services/LevelService")
const cloudinary = require('../scripts/utilis/cloudinary')

class Course {
    index(req, res) {
        CourseService
        .list()
            .then((response) => {
                res.status(httpStatus.OK).send(response)
            }).catch((e) => res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e))
    }
    async create(req, res) {
        req.body.user_id = req.user
        const result =  await cloudinary.uploader.upload(req.files.cover.tempFilePath,  {resource_type : "image", folder:`${req.body.user_id.full_name}/movie/cover`})
        
        CourseService.create(
          {
            course_name: req.body.course_name,
            file: req.body.file,
            price: req.body.price,
            description: req.body.description,
            category: req.body.category,
            level: req.body.level,
            cover: result.secure_url,
            cover_cloudinary_id: result.public_id,
            user_id: req.body.user_id,
          },
          { new: true }
        )
          .then((response) => {
            res.status(httpStatus.CREATED).send(response);
            CategoryService.update(
              { _id: req.body.category },
              { $push: { course: response._id } }
            ).then();
            LevelService.update(
              { _id: req.body.level },
              { $push: { course: response._id } }
            ).then();
            UserService.update(
              { _id: req.user._id },
              { $push: { created_courses: response._id } }
            ).then();
          })
          .catch((e) => {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e);
          });
    }

    async ownCourses (req, res) {
        const user = await UserService.findOne({_id:req.params.id})
        res.send(user.created_courses)
    }

    async ownLearnings (req, res) {
        const user = await UserService.findOne({_id:req.params.id})
        res.send(user.learnings)
    }

    findOne(req, res) {
        if (!req.params?.id) {
            return res.status(httpStatus.BAD_REQUEST).send({
                message: "ID information is missing for Update"
            })
        }
        CourseService
            .findOne({ _id: req.params.id })
            .then((course) => {
                return res.status(httpStatus.OK).send(course)
            })
            .catch((e) => res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e))
    }
    membersList(req, res) {
        if (!req.params?.id) {
            return res.status(httpStatus.BAD_REQUEST).send({
                message: "ID information is missing for Update"
            })
        }
        CourseService
            .findOne({ _id: req.params.id })
            .then((course) => {
                return res.status(httpStatus.OK).send(course.members)
            })
            .catch((e) => res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e))
    }

    update(req, res) {
        if (!req.params?.id) {
            return res.status(httpStatus.BAD_REQUEST).send({
                message: "ID information is missing for Update"
            })
        }
        CourseService.update(req.params?.id, req.body)
            .then(updatedCourse => {
                res.status(httpStatus.OK).send(updatedCourse)
            }).catch((e) => res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ message: "Error occured while upadate course" }))
    }

    async deleteCourse(req, res) {
        if (!req.params?.id) { return res.status(httpStatus.BAD_REQUEST).send({ message: "ID information is missing for Delete" }) }


        await CourseService.deleteAll({ _id: { $in: req.params?.id} })
            .then((deleteCourse) => {
                if (!deleteCourse) { return res.status(httpStatus.NOT_FOUND).send({ message: "This course not found" }) }
                res.status(httpStatus.OK).send({ message: "Course Deleted" })
            }).catch(e => res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ message: "Error occured while delete course" }))

    }

    projectList(req, res) {
        ProjectService
            .list({ course_id: req.params.id })
            .then(projects => {
                res.status(httpStatus.OK).send(projects)
            })
            .catch((e) => (httpStatus.INTERNAL_SERVER_ERROR).send({ error: "error occured" }))
    }

    makeComment(req, res) {
        // const { id } = req.params
        CourseService
            .findOne({ _id: req.params.id })
            .then(courseTask => {
                const comment = {
                    ...req.body,
                    commented_at: new Date(),
                    user_id: req.user
                }
                courseTask.comments.push(comment)
                courseTask.save()
                    .then((commented) => {
                        return res.status(httpStatus.OK).send(commented)
                    })
                    .catch(e => res.status(INTERNAL_SERVER_ERROR).send({ error: "Error occured while comment" }))
            })
    }

    deleteComment(req, res) {
        CourseService
            .findOne({ _id: req.params.id })
            .then(mainCourse => {
                // if(!mainCourse) return res.status(httpStatus.NOT_FOUND).send({message: "This comment not found"})
                mainCourse.comments = mainCourse.comments.filter((d) => { return d._id.toString() != req.params.commentId })
                mainCourse
                    .save()
                    .then((update) => {
                        return res.status(httpStatus.OK).send(update)
                    })
                    .catch(e => res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ message: "comment deleted" }))
            })
    }
}

module.exports = new Course()
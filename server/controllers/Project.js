const httpStatus = require("http-status")
const ProjectService = require("../services/ProjectService")
const UserService = require("../services/UserService")
const cloudinary = require('../scripts/utilis/cloudinary')

class Project {
    index(req,res){
        req.body.user_id = req.user
        UserService
        .findOne({_id: req.body.user_id})
        .then((response) => {
            res.status(httpStatus.CREATED).send(response.created_projects)
        }).catch((e) => res.status(httpStatus.INTERNAL_SERVER_ERROR).send({message:e}))
    }

    async create(req, res){
        req.body.user_id = req.user
        const result =  await cloudinary.uploader.upload(req.files.project_file.tempFilePath,  {resource_type : "image", folder:`${req.body.user_id.full_name}/projects`});
        await ProjectService
        .create({project_file: result.secure_url, comment:req.body.comment, course_id: req.body.course_id, createdBy: req.body.user_id._id})
        .then((response) => {
                UserService.update({_id: req.user._id}, {$push:{created_projects: response._id }},{ new: true }).then()
                res.status(httpStatus.CREATED).send(response)
                
            })
            .catch((e) => {
                res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e)
            })
    }

    deleteProject(req, res){
        ProjectService.delete(req.params?.id)
        .then((deletedProject) => {
            if(!deletedProject) {return res.status(httpStatus.NOT_FOUND).send({message:"This user not found"})}
            UserService.update({_id: req.user._id}, {$pull: {created_projects: deletedProject._id.toString()}}).then()
            res.status(httpStatus.OK).send({message:"Course Deleted"})
        }).catch(e => res.status(httpStatus.INTERNAL_SERVER_ERROR).send({message:"Error occured while delete course"}))
    }

    update(req, res ){
        if(!req.params?.id){
            return res.status(httpStatus.BAD_REQUEST).send({
                message:"ID information is missing for Update"
            })
        }
        ProjectService.update(req.params?.id, req.body)
        .then(updatedCourse => {
            res.status(httpStatus.OK).send(updatedCourse)
        }).catch((e) => res.status(httpStatus.INTERNAL_SERVER_ERROR).send({message:"Error occured while upadate course"}))
    }
    
    findOne(req, res) {
        if(!req.params?.id){
            return res.status(httpStatus.BAD_REQUEST).send({
                message:"ID information is missing for Update"
            })
        }
        ProjectService
            .findOne({_id: req.params.id})
                .then((project) => {
                    return res.status(httpStatus.OK).send(project)
                })
                .catch((e) => res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e))
    }
}

module.exports = new Project()
const httpStatus = require("http-status")
const ProjectService = require("../services/ProjectService")
const UserService = require("../services/UserService")
// indexte hata var
class Project {
    // index2(req,res){
    //     req.body.user_id = req.user
    //     ProjectService
    //     .list({user_id: req.body.user_id})
    //     .then((response) => {
    //         console.log(response)
            
    //         res.status(httpStatus.OK).send(response)
    //     }).catch((e) => res.status(httpStatus.INTERNAL_SERVER_ERROR).send({message:e}))
    // }
    index(req,res){
        req.body.user_id = req.user
        UserService
        .findOne({_id: req.body.user_id})
        .then((response) => {
            res.status(httpStatus.CREATED).send(response.created_projects)
        }).catch((e) => res.status(httpStatus.INTERNAL_SERVER_ERROR).send({message:e}))
    }

    create(req, res){
        req.body.user_id = req.user
        ProjectService
        .create(req.body)
            .then((response) => {
                res.status(httpStatus.CREATED).send(response)
                console.log(response)
                UserService.update({_id:req.user._id}, {$push:{created_projects: response._id}}).then()
            })
            .catch((e) => {
                res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e)
            })
    }

    deleteProject(req, res){
        // if(!req.params?.id){
        //     return res.status(httpStatus.BAD_REQUEST).send({
        //         message:"ID information is missing for Delete"
        //     })
        // }
        // UserService
        //     .findOne({_id: req.body.user_id})
        //     .then((projects) => {
        //         console.log(projects)
        //     })
        ProjectService.delete(req.params?.id)
        .then((deletedProject) => {
            // console.log("delete1", deletedProject)
            if(!deletedProject) {return res.status(httpStatus.NOT_FOUND).send({message:"This user not found"})}
            // console.log("user", req.user._id.created_projects)
            // console.log("user2", req.user._id)
            // console.log("user3", req.body.user._id)
            console.log("user3", deletedProject._id.toString())
            
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

    // projectList(res, req){
    //     ProjectService
    //     .list({user_id: req.user._id})
    //     .then((projects) => {
    //         res.status(httpStatus.OK).send(projects)
    //         console.log(projects)
    //     }).catch(() => res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
    //         error:"Projeleri getirirken hata olustu"
    //     }))
    // }
}

module.exports = new Project()
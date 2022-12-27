const httpStatus = require("http-status")
const CategoryService = require("../services/CategoryService")

class Course {
    index(req,res){
        CategoryService
        .list()
        .then((response) => {
            res.status(httpStatus.OK).send(response)
        }).catch((e) => res.status(httpStatus.INTERNAL_SERVER_ERROR).send({message:e}))
    }


    create(req, res){
        CategoryService
        .create(req.body)
            .then((response) => {
                res.status(httpStatus.CREATED).send(response)
            })
            .catch((e) => {
                res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e)
            })
    }
    findOne(req, res) {
        if(!req.params?.id){
            return res.status(httpStatus.BAD_REQUEST).send({
                message:"ID information is missing for Update"
            })
        }
        CategoryService
            .findOne({_id: req.params.id})
                .then((course) => {
                    return res.status(httpStatus.OK).send(course)
                })
                .catch((e) => res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e))
    }

}

module.exports = new Course()
const httpStatus = require("http-status")
const LevelService = require("../services/LevelService")

class Levels {
    index(req,res){
        LevelService
        .list()
        .then((response) => {
            console.log(response)
            
            res.status(httpStatus.OK).send(response)
        }).catch((e) => res.status(httpStatus.INTERNAL_SERVER_ERROR).send({message:e}))
    }


    create(req, res){
        LevelService
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
        LevelService
            .findOne({_id: req.params.id})
                .then((course) => {
                    return res.status(httpStatus.OK).send(course)
                })
                .catch((e) => res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e))
    }


}

module.exports = new Levels()
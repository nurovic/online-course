const httpStatus = require("http-status")
const MoviesService = require("../services/MoviesService")
const cloudinary = require('../scripts/utilis/cloudinary')

class Movies{
    index(req,res){
        req.body.user_id = req.user
        MoviesService
        .list(req.body)
        .then((response) => {
            res.status(httpStatus.OK).send(response)
        }).catch((e) => res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e))
    }
    async create(req, res){

        req.body.user_id = req.user
        
        const result =  await cloudinary.uploader.upload(req.files.movie.tempFilePath,  {resource_type : "video", folder:`${req.body.user_id.full_name}/movie`})

        const response = await MoviesService.create({title: req.body.title, movie:result.secure_url, cloudinary_id: result.public_id})
        res.status(httpStatus.CREATED).send(response)
    }
    findOne(req, res) {
        if(!req.params?.id){
            return res.status(httpStatus.BAD_REQUEST).send({
                message:"ID information is missing for Update"
            })
        }
        MoviesService
            .findOne({_id: req.params.id})
                .then((movie) => {
                    return res.status(httpStatus.OK).send(movie)
                })
                .catch((e) => res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e))
    }

    async deleteMovies(req, res){
        if(!req.params?.id){return res.status(httpStatus.BAD_REQUEST).send({message:"ID information is missing for Delete"})}
        let cloudId = await MoviesService
            .findOne({_id: req.params.id}).then((cloudMovie) => {return cloudMovie.cloudinary_id})
            await cloudinary.uploader.destroy(cloudId, {resource_type : "video"});

        await MoviesService.delete(req.params.id)
        .then((deleteCourse) => {
            if(!deleteCourse) {return res.status(httpStatus.NOT_FOUND).send({message:"This movie not found"})}
            res.status(httpStatus.OK).send({
                message:"Movie Deleted"
            })
        }).catch(e => res.status(httpStatus.INTERNAL_SERVER_ERROR).send({message:"Error occured while delete movie"}))
    }
}

module.exports = new Movies()
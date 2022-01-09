const httpStatus = require("http-status")
const { passwordToHash, generateAccesToken, generateRefreshToken } = require('../scripts/utilis/helper.js')
const UserService = require('../services/UserService')
const uuid = require("uuid")
const eventEmitter = require("../scripts/events/eventEmitter")
const cloudinary = require('../scripts/utilis/cloudinary')
const stripe = require("stripe")(process.env.STRIPE_SECRETKEY)
class User {
    create(req, res) {
        req.body.password = passwordToHash(req.body.password)
        UserService.create(req.body)
            .then((response) => {
                res.status(httpStatus.CREATED).send(response)
            })
            .catch((e) => {
                res.status(httpStatus.INTERNAL_SERVER_ERROR).send({message:"Error occurred while creating user"})
            })
    }

    login(req, res){
        req.body.password = passwordToHash(req.body.password)
        UserService.findOne(req.body)
        .then((user) => {
                if(!user) return  res.status(httpStatus.NOT_FOUND).send({message: "the user not find"})
                user = {
                    ...user.toObject(),
                    tokens: {
                        access_token : generateAccesToken(user),
                        refresh_token : generateRefreshToken(user)
                    }
                }
                delete user.password
                res.status(httpStatus.OK).send(user)
            })
            .catch((e) => res.status(httpStatus.INTERNAL_SERVER_ERROR).send({message:"Error occured while login user"}))
    }

    index(req, res){
        UserService.list()
            .then((response) => {
                res.status(httpStatus.OK).send(response)
            })
            .catch((e) => res.status(INTERNAL_SERVER_ERROR).send(e))
    }

    update(req, res){
        UserService.update(req.user?._id, req.body)
            .then(updatedUser => {
                res.status(httpStatus.OK).send(updatedUser)
            })
            .catch((e) => res.status(httpStatus.INTERNAL_SERVER_ERROR).send({message:"Error occured while update"}))
    }

    deleteUser(req, res){
        if(!req.params?.id){
            return res.status(httpStatus.BAD_REQUEST).send({
                message:"ID information is missing"
            })
        }
    
        UserService.delete(req.params?.id)
            .then(deletedItem => {
            console.log(deletedItem)
            if(!deletedItem) {
                return res.status(httpStatus.NOT_FOUND).send({
                    message:"This user not found"
                })
            }
            res.status(httpStatus.OK).send({
                message:"This user deleted"
            })
        }).catch(e => res.status(httpStatus.INTERNAL_SERVER_ERROR).send({message:"Error occured while delete user"}))
    }

    changePassword(req,res){
        // compare old password
        req.body.password = passwordToHash(req.body.password)

        UserService.update(req.user?._id, req.body)
        .then((changedPassword) => {
            res.status(httpStatus.OK).send(changedPassword)
        }).catch(() => res.status(httpStatus.INTERNAL_SERVER_ERROR).send({error:"Error occured while update"}))
    }


    addLearning(res, req){
        console.log(res.body.course_id)
        let x = res.body.course_id
        UserService.update(req.user?._id, x)
        .then(updatedUser => {
            console.log("addded ")
        })

    }

    resetPassword(req, res){
        const new_password = uuid.v4().split("-")[0]  || `usr-${new Date().getTime()}` 
        // console.log(new_password)
        // console.log(req.body.email)
        UserService.updateWhere({ email: req.body.email}, { password: passwordToHash(new_password)})
            .then((updatedUser) => {
                if(!updatedUser) return res.status(httpStatus.NOT_FOUND).send({error: "Böyle bir kullanıcı bulunamadı"}) 
                eventEmitter.emit("send_email", {
                    to: updatedUser.email,
                    subject: "Sifre Sıfırlama", // Subject line
                    html:`Talebiniz üzere şifre sıfırlama işleminiz gerceklesmiştir. <br/> Giris yaptıktan sonra sifrinizi degistirmeyi unutamyın <br/> Yeni Sifreniz:  <b>${new_password}</b>`, // html body
                })
                console.log("şifreniz",  eventEmitter)
                res.status(httpStatus.OK).send({
                    message:"şifre sıfırlama işlemi için sisteme kayıtlı e-posta adresinize gereken bilgileri gönderdik. "
            })
        })
             .catch(() => res.status(httpStatus.INTERNAL_SERVER_ERROR).send({error: "şifreniz gönderilemedi"}))
    }

    // async updateProfileImage(req,res) {
    //     console.log(req.files.profile_image)
    //     try {
    //         const result = await cloudinary.uploader.upload(req.files.profile_image.tempFilePath, {folder:"ProfilImage"});
        
    //         const updatedUser = await UserService.update(
    //           req.user._id,
    //           { profile_image: result.secure_url },
    //           { new: true }
    //         );
    //         res
    //           .status(201)
    //           .json({ success: true, message: 'Your profile has updated!' });
    //       } catch (error) {
    //         res
    //           .status(500)
    //           .json({ success: false, message: 'server error, try after some time' });
    //         console.log( error.message);
    //       }
    // }

    async updateProfileImage(req,res) {
        req.body.user_id = req.user
        // console.log(req.body.user_id.full_name)
        const result =  await cloudinary.uploader.upload(req.files.profile_image.tempFilePath,  {resource_type : "image", folder:`${req.body.user_id.full_name}/photo`});
        
        await UserService.update(req.user._id, { profile_image: result.secure_url },{ new: true })
         .then((update) => {
            res.status(httpStatus.OK).send(update)
        })
        .catch((e) => res.status(httpStatus.INTERNAL_SERVER_ERROR).send({message:"Error occured while update"}))
}
}
module.exports = new User() 



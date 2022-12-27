const httpStatus = require("http-status");
const {
  passwordToHash,
  generateAccesToken,
  generateRefreshToken,
} = require("../scripts/utilis/helper.js");
const UserService = require("../services/UserService");
const uuid = require("uuid");
const eventEmitter = require("../scripts/events/eventEmitter");
const cloudinary = require("../scripts/utilis/cloudinary");

class User {
  profile(req, res){
    UserService
    .findOne({_id: req.user._id})
    .then((response) => {
        res.status(httpStatus.CREATED).send(response)
    }).catch((e) => res.status(httpStatus.INTERNAL_SERVER_ERROR).send({message:e}))
  }
  create(req, res) {
    req.body.password = passwordToHash(req.body.password);
    UserService.create(req.body)
      .then((response) => {
        res.status(httpStatus.CREATED).send(response);
      })
      .catch((e) => {
        res
          .status(httpStatus.INTERNAL_SERVER_ERROR)
          .send({ message: "Error occurred while creating user" });
      });
  }
  login(req, res) {
    req.body.password = passwordToHash(req.body.password);
    UserService.findOne(req.body)
      .then((user) => {
        if (!user)
          return res
            .status(httpStatus.NOT_FOUND)
            .send({ message: "The user not find" });
        user = {
          ...user.toObject(),
          tokens: {
            access_token: generateAccesToken(user),
            refresh_token: generateRefreshToken(user),
          },
        };
        delete user.password;
        res.status(httpStatus.OK).send(
          {
          _id: user._id,
          full_name: user.full_name,
          email: user.email,
          token: user.tokens
        }
        );
      })
      .catch((e) =>
        res
          .status(httpStatus.INTERNAL_SERVER_ERROR)
          .send({ message: "Error occured while login user" })
      );
  }

  index(req, res) {
    UserService.list()
      .then((response) => {
        res.status(httpStatus.OK).send(response);
      })
      .catch((e) => res.status(INTERNAL_SERVER_ERROR).send(e));
  }
  findOne(req, res) {
    if(!req.params?.id){
        return res.status(httpStatus.BAD_REQUEST).send({
            message:"ID information is missing for Update"
        })
    }
    UserService
        .findOne({_id: req.params.id})
            .then((user) => {
                return res.status(httpStatus.OK).send(
                  {
                    _id: user._id,
                    full_name: user.full_name,
                    profession: user.profession,
                    profile_image: user.profile_image,
                    about: user.about,
                    created_courses: user.created_courses
                  }
                )
            })
            .catch((e) => res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e))
}
  update(req, res) {
    UserService.update(req.user?._id, req.body)
      .then((updatedUser) => {
        res.status(httpStatus.OK).send(updatedUser);
      })
      .catch((e) =>
        res
          .status(httpStatus.INTERNAL_SERVER_ERROR)
          .send({ message: "Error occured while update" })
      );
  }

  deleteUser(req, res) {
    if (!req.params?.id) {
      return res.status(httpStatus.BAD_REQUEST).send({
        message: "ID information is missing",
      });
    }

    UserService.delete(req.params?.id)
      .then((deletedItem) => {
        if (!deletedItem) {
          return res.status(httpStatus.NOT_FOUND).send({
            message: "This user not found",
          });
        }
        res.status(httpStatus.OK).send({
          message: "This user deleted",
        });
      })
      .catch((e) =>
        res
          .status(httpStatus.INTERNAL_SERVER_ERROR)
          .send({ message: "Error occured while delete user" })
      );
  }

  changePassword(req, res) {
    req.body.password = passwordToHash(req.body.password);

    UserService.update(req.user?._id, req.body)
      .then((changedPassword) => {
        res.status(httpStatus.OK).send(changedPassword);
      })
      .catch(() =>
        res
          .status(httpStatus.INTERNAL_SERVER_ERROR)
          .send({ error: "Error occured while update" })
      );
  }
  resetPassword(req, res) {
    const new_password =
      uuid.v4().split("-")[0] || `usr-${new Date().getTime()}`;
    UserService.updateWhere(
      { email: req.body.email },
      { password: passwordToHash(new_password) }
    )
      .then((updatedUser) => {
        if (!updatedUser)
          return res
            .status(httpStatus.NOT_FOUND)
            .send({ error: "No such user found" });
        eventEmitter.emit("send_email", {
          to: updatedUser.email,
          subject: "Password Reset", // Subject line
          html: `As per your request, your password reset process has been completed. <br/> Don't forget to change your password after logging in. <br/> New Passpord:  <b>${new_password}</b>`, // html body
        });
        res.status(httpStatus.OK).send({
          message:
            "We have sent the required information to your registered e-mail address for the password reset process.",
        });
      })
      .catch(() =>
        res
          .status(httpStatus.INTERNAL_SERVER_ERROR)
          .send({ error: "Your password could not be sent" })
      );
  }

  async updateProfileImage(req, res) {
    req.body.user_id = req.user;
    const result = await cloudinary.uploader.upload(
      req.files.profile_image.tempFilePath,
      { resource_type: "image", folder: `${req.body.user_id.full_name}/photo` }
    );

    await UserService.update(
      req.user._id,
      { profile_image: result.secure_url },
      { new: true }
    )
      .then((update) => {
        res.status(httpStatus.OK).send(update);
      })
      .catch((e) =>
        res
          .status(httpStatus.INTERNAL_SERVER_ERROR)
          .send({ message: "Error occured while update" })
      );
  }
}
module.exports = new User();

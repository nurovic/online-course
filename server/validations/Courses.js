const Joi = require("joi")

const createValidation = Joi.object({
    course_name: Joi.string().required().min(5),
    description: Joi.string().required().min(5),
    // file: Joi.string().required(),
    price: Joi.number().required()
})
const updateValidation = Joi.object({
    course_name: Joi.string().min(5),
    description: Joi.string().required().min(5),
    file: Joi.string(),
    price: Joi.number()
})

const commentValidation = Joi.object({
    comment: Joi.string().min(2),
})
module.exports = {
    createValidation,
    updateValidation,
    commentValidation
}
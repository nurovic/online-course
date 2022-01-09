const Joi = require("joi")

const createValidation = Joi.object({
    project_file: Joi.string().required().min(5),
    course_id: Joi.string().required().min(5),
    comment: Joi.string().required().min(5)
})
const updateValidation = Joi.object({
    project_file: Joi.string().min(5),
    course_id: Joi.string().min(5),
    comment: Joi.string().min(5)
})

module.exports = {
    createValidation,
    updateValidation

}
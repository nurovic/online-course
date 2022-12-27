const BaseService = require("./BaseService")
const BaseModel = require("../models/Courses")

class CourseService extends BaseService {
    constructor() {
        super(BaseModel)
    }

}

module.exports = new CourseService ()
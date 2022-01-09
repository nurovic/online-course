const BaseService = require("./BaseService")
const BaseModel = require("../models/Level")

class LevelsService extends BaseService {
    constructor() {
        super(BaseModel)
    }
    findCourse(course){
        return this.model.findOne(course)
    }
}

module.exports = new LevelsService ()
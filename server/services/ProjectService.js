const BaseService = require("./BaseService")
const BaseModel = require("../models/Projects")

class ProjectService extends BaseService {
    constructor() {
        super(BaseModel)
    }
}

module.exports = new ProjectService ()
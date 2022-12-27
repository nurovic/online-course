const BaseService = require("./BaseService")
const BaseModel = require("../models/Users")

class UserService extends BaseService{
    constructor(){
        super(BaseModel)
    }
}

module.exports = new UserService()
const BaseService = require("./BaseService")
const BaseModel = require("../models/Movies")

class MoviesController extends BaseService {
    constructor() {
        super(BaseModel)
    }

}

module.exports = new MoviesController ()
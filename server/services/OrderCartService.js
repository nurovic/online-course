const BaseService = require("./BaseService")
const BaseModel = require("../models/OrderCart")

class OrderCartService extends BaseService {
    constructor() {
        super(BaseModel)
    }
}

module.exports = new OrderCartService ()
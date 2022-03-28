const httpStatus = require("http-status")
const JWT = require("jsonwebtoken");

const UserService = require("../services/UserService");
const authenticateToken = (req, res, next) => { 
    const token = req.headers?.authorization?.split(" ")[1] || null
    if(token === null){
        return res.status(httpStatus.UNAUTHORIZED).send({error: "You have to log in firstly"})
    }

    JWT.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY, async (err, context) => {
        console.log("1jwt", context)
        if(err) return res.status(httpStatus.FORBIDDEN).send({error: err})
        console.log("2jwt", context)
        req.user = await UserService.findOneById(context.user_id)
        console.log("3jwt", context)
        next()
    })
}

module.exports = authenticateToken
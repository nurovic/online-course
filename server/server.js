const express = require ('express')
const morgan = require('morgan')
const bodyParser = require ('body-parser')
const cors = require('cors')


const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()


mongoose.connect(
    process.env.DATABASE, 
{ useNewUrlParser: true, useUnifiedTopology: true,  },
err => {
    if(err){
        console.log(err)
    }else {
        console.log("connected to the database")
    }
})





const app = express()


//  Middlewares
app.use(cors())
app.use(morgan("dev"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))



// require apis

const courseRoutes = require ('./routes/courses')
const authRoutes = require ('./routes/auth')

app.use("/api", courseRoutes)
app.use("/api", authRoutes)

app.listen(3000, () => {
    console.log('started listening on 3000')
})
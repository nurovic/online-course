const express = require("express")
const config = require("./config")
const helmet = require ('helmet')
const loaders = require("./loaders")
const events = require("./scripts/events")
const fileUpload = require("express-fileupload")
// const path = require("path")
const {UserRoutes, CourseRoutes, ProjectRoutes, OrderCartRoutes, MoviesRoutes, CategoryRoutes, LevelRoutes } = require("./api-routes")
const cors = require('cors')


config()
loaders()
events()


const app = express()
// app.use("/uploads", express.static(path.join(__dirname,"./", "uploads")))
app.use(express.json())
app.use(helmet())
app.use(fileUpload({
    useTempFiles:true
}))
app.use(cors())

app.listen(process.env.APP_PORT, ()=> {
    console.log("Working")
    app.use("/users", UserRoutes)
app.use("/courses", CourseRoutes)
app.use("/projects", ProjectRoutes)
app.use("/order-cart", OrderCartRoutes)
app.use("/movies", MoviesRoutes)
app.use("/category", CategoryRoutes)
app.use("/level", LevelRoutes)
})
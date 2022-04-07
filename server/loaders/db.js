const Mongoose = require ("mongoose")

const db = Mongoose.connection

db.once("open", () => {
    console.log("Database connected...")
})



const connectDB = async () => {
    await Mongoose.connect(`${process.env.DATABASE}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

module.exports = {
    connectDB
}
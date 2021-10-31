const router = require("express").Router()
const Course = require('../modules/course')
const cloudinary = require("../middlewares/cloudinary");
const upload = require("../middlewares/multer");

router.post('/courses', upload.single('movie'),

async (req,res)=>{
    try {
        const movie = await cloudinary.uploader.upload(
            req.file.path,  
            {resource_type : "video"}
            );
        let course = new Course()
        course.title = req.body.title
        course.level = req.body.level
        course.movie = movie.secure_url
        course.description = req.body.description
        course.price = req.body.price
    
        await course.save()
        
        res.json({
            status: true,
            message:"successfully"
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
})

// GET

router.get('/courses', async (req,res) => {
    try {
        let courses = await Course.find()

        res.json({
            success:true,
            courses: courses
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
})
// GET request - get a single course
router.get('/courses/:id', async (req,res) => {
    try {
        let courses = await Course.find({_id: req.params.id})

        res.json({
            success:true,
            courses: courses
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
})

// PUT request

router.put("/courses/:id",upload.single("movie"), async (req,res) => {
    try {
        const movie = await cloudinary.uploader.upload(
            req.file.path,  
            {resource_type : "video"}
            );
        let course = await Course.findOneAndUpdate(
            {_id : req.params.id},
            {
                $set:{
                    title : req.body.title,
                    movie : movie.secure_url,
                    description : req.body.description,
                    price : req.body.price
                }
            },
            {upsert: true}
        )

        res.json({
            success:true,
            updateCourses: courses
        })

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
} )

router.delete("/courses/:id", async (req,res) => {
    try {
        let deletedCourse = await Course.findOneAndDelete({_id: req.params.id})

        if(deletedCourse){
            res.json({
                success:true,
                message:"successfully deleted"
            })
        }
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
  
})

module.exports = router
const multer = require("multer");
const path = require("path");

// Multer config
module.exports = multer({
  storage: multer.diskStorage({}),
  fileFilter: (req, file, cb) => {
    let ext = path.extname(file.fieldname);  
    // if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
    if (ext == "mp4" && ext !== ".mpeg4") {
      cb(new Error("File type is not supported"), false);
      return;
    }
    cb(null, true);
  },
});

// const videoStorage = multer.diskStorage({
//   destination: 'videos', // Destination to store video 
//   filename: (req, file, cb) => {
//       cb(null, file.fieldname + '_' + Date.now() 
//        + path.extname(file.originalname))
//   }
// });

// module.exports = multer({
//   storage: videoStorage,
//   limits: {
//   fileSize: 10000000 // 10000000 Bytes = 10 MB
//   },
//   fileFilter(req, file, cb) {
//     // upload only mp4 and mkv format
//     if (!file.originalname.match(/\.(mp4|MPEG-4|mkv)$/)) { 
//        return cb(new Error('Please upload a video'))
//     }
//     cb(undefined, true)
//  }
// })

// module.exports = videoUpload
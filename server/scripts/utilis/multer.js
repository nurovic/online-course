// const multer = require("multer");
// const path = require("path");

// Multer config
// module.exports = multer({
//   storage: multer.diskStorage({}),
//   fileFilter: (req, file, cb) => {
//     let ext = path.extname(file.fieldname);  
//     // if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
//     if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
//       cb(new Error("File type is not supported"), false);
//       return;
//     }
//     cb(null, true);
//   },
// });
// (ext == "mp4" && ext !== ".mpeg4")
import multer from "multer";

// //! single file upload 
// // Configure multer for file uploads
// const upload = multer({ dest: 'uploads/' });

// // Specify 'file' as the field name for the uploaded file and limit the upload to 2 files
// const uploadSingleFile = upload.single('file');
//? ________________________________________________________________
//! multiple files upload at the same time
// Configure multer for file uploads
const upload = multer({ dest: 'uploads/' });

// Specify 'file' as the field name for the uploaded file and limit the upload to 2 files
const uploadMultipleFiles = upload.array('file', 2);

//! multiple fields upload at the same time in case we have avatar or resume upload file
// // Configure multer for file uploads
// const upload = multer({ dest: 'uploads/' });

// // * configure multiple fields upload 
// const multiUpload = upload.fields([
//   { name: "avatar", maxCount: 1 },
//   { name: "resume", maxCount: 1 }
// ])
// // Specify 'file' as the field name for the uploaded file and limit the upload to 2 files
// const uploadSingleFile = multiUpload;

export {
  uploadMultipleFiles,
};
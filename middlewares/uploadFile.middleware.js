import multer from "multer";
import { v4 as uuidv4 } from 'uuid';

// //! single file upload 
// // Configure multer for file uploads
// const upload = multer({ dest: 'uploads/' });

// // Specify 'file' as the field name for the uploaded file and limit the upload to 2 files
// const uploadSingleFile = upload.single('file');
//? ________________________________________________________________
//! multiple files upload at the same time
// Configure multer for file uploads
// const upload = multer({ dest: 'uploads/' });

// // Specify 'file' as the field name for the uploaded file and limit the upload to 2 files
// const uploadMultipleFiles = upload.array('file', 2);

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


// ----------------------------------------------------------------
//! multiple files upload at the same time with custom name 

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const { originalname } = file;
    cb(null, `${uuidv4()}-${originalname}`);
  }
})
// Configure multer for file uploads
const upload = multer({ storage });

// Specify 'file' as the field name for the uploaded file and limit the upload to 2 files
const uploadMultipleFilesWithCustomName = upload.array('file', 2);
export {
  uploadMultipleFilesWithCustomName
};
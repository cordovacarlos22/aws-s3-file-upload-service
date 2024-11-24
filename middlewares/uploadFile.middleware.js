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

/// to customize file upload name 
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const { originalname } = file;
    cb(null, `${uuidv4()}-${originalname}`);
  }
});

// filter to only take images 
const fileFilter = (req, file, cb) => {
  if (file.mimetype.split('/')[0] === 'image') {
    cb(null, true);
  } else {
    cb(new Error("File is not of the correct type"), false);
  }
};
// Configure multer for file uploads
const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 1024 * 1024 * 5, files: 1 } // 5MB and only takes 1 file
});

// Specify 'file' as the field name for the uploaded file and limit the upload to 2 files
const uploadMultipleFilesWithCustomName = upload.array('file');


const multerErrorHandler = (upload) => (req, res, next) => {
  upload(req, res, (error) => {
    if (error instanceof multer.MulterError) {
      if (error.code === 'LIMIT_FILE_SIZE') {
        return res.status(400).json({ message: 'File too large. Maximum size is 5MB' });
      } else if (error.code === 'LIMIT_FILE_COUNT') {
        return res.status(400).json({ message: 'Too many files uploaded. Only 1 file is allowed' });
      }
    }
    next();
  });
};

export {
  uploadMultipleFilesWithCustomName,
  multerErrorHandler
};
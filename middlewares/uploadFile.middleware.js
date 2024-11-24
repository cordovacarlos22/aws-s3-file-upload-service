import multer from "multer";

// Configure multer for file uploads
const upload = multer({ dest: 'uploads/' });

// Specify 'file' as the field name for the uploaded file and limit the upload to 2 files
const uploadSingleFile = upload.array('file', 2);

export {
  uploadSingleFile,
};
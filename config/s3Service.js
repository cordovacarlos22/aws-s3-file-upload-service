import AWS from "aws-sdk";
import dotenv from 'dotenv';
import { v4 as uuidv4 } from 'uuid';

dotenv.config();

//! out date version 2 not longer supported
// Function to upload single file to S3 single file 
// const s3UploadV2 = async (file) => {

//   // AWS S3 configuration
//   const s3 = new AWS();

//   // param for s3 upload request 
//   const param = {
//     Bucket: process.env.BUCKET_NAME,
//     Key: `upload/${uuidv4()}-${file.originalname}`,
//     Body: file.buffer
//   }
//   // const result = s3.upload(param).promise();
//   return await  s3.upload(param).promise();

// };

// Function to upload  multiple files to S3 single file 
// const s3UploadV2 = async (files) => {

//   // AWS S3 configuration
//   const s3 = new AWS();

//   // params for s3 upload request 

//   const params = files.map((file) => {
//     return {
//       Bucket: process.env.BUCKET_NAME,
//       Key: `upload/${uuidv4()}-${file.originalname}`,
//       Body: file.buffer
//     }
//   });

//   // const resutl = await Promise.all(params.map((param) => s3.upload(param).promise()));

//   await Promise.all(params.map((param) => s3.upload(param).promise()));


// };
// export default s3UploadV2;

// ! new version v3 






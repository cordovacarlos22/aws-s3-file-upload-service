// import AWS from "aws-sdk";
import dotenv from "dotenv";
import { v4 as uuidv4 } from 'uuid';
import {
  PutObjectCommand,
  S3Client
} from "@aws-sdk/client-s3";

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


// Function to upload  single file to S3 single file using v3
// const s3UploadV3 = async (file) => {

//   const s3Client = new S3Client();

//   const awsBucktName = process.env.AWS_BUCKET_NAME
//   const key = `upload/${uuidv4()}-${file.originalname}`;
//   const param = {
//     Bucket: awsBucktName ,
//     Key: key,
//     Body: file.buffer
//   }
//   // const result = s3Client.send(new PutObjectCommand(param));

//   const result = await s3Client.send(new PutObjectCommand(param));
//   return {
//     result,
//     url: `https://${awsBucktName}.s3.us-west-1.amazonaws.com/${key}`,
//   }
// };
const s3UploadV3 = async (files) => {

  const s3Client = new S3Client();

  const awsBucktName = process.env.AWS_BUCKET_NAME
 // Create parameters for each file
  const params = files.map((file) => {
    // Generate a unique key for each file
    const key = `upload/${uuidv4()}-${file.originalname || "file"}`;

    return {
      Bucket: awsBucktName,
      Key: key,
      Body: file.buffer,
    };
  });

  // Upload all files in parallel
  const results = await Promise.all(
    params.map((param) => s3Client.send(new PutObjectCommand(param)))
  );

  // Generate public URLs for all files
  const urls = params.map((param) =>
    `https://${awsBucktName}.s3.us-west-1.amazonaws.com/${param.Key}`
  );


  return {
    results, // AWS metadata for each file upload
    urls,    // Public URLs for all files
  };
};



export default s3UploadV3;






import s3UploadV3 from "../config/s3Service.js";
import s3UploadV2 from "../config/s3Service.js";

// !single file uploadv2 
// const upload = async (req, res) => {

//   try {


//     if (!req.files) {

//       return res.status(400).json({ message: 'No file uploaded' });
//     }

//     const file = req.files[0]; // one grab the first file we received

//     const result = await s3UploadV2(file) // store the result 


//     res.status(200).json("files  successfully uploaded ",result);
//   } catch (error) {
//     res.status(500).json({ error: "Internal Server Error", details: error.message });
//   }

// }

//! multiple file upload v2 
// const upload = async (req, res) => {

//   try {


//     if (!req.files) {

//       return res.status(400).json({ message: 'No files uploaded' });
//     }

//     const results = await s3UploadV2(req.files) // store the result 


//     res.status(200).json("files  successfully uploaded ", results);
//   } catch (error) {
//     res.status(500).json({ error: "Internal Server Error", details: error.message });
//   }

// }

// !single file upload v3 
// const upload = async (req, res) => {

//   try {

//     if (!req.files) {

//       return res.status(400).json({ message: 'No file uploaded' });
//     }

//     const file = req.files[0]; // one grab the first file we received

//     const result = await s3UploadV3(file) // store the result 
//     console.log("result", result)

//     // Send the response with a proper JSON object
//     res.status(200).json({
//       message: "File successfully uploaded",
//       data: result,
//     });
//   } catch (error) {
//     res.status(500).json({ error: "Internal Server Error", details: error.message });
//   }

// }
//! multiple files upload v3 
const upload = async (req, res) => {

  try {

    if (!req.files) {

      return res.status(400).json({ message: 'No file uploaded' });
    }

    const result = await s3UploadV3(req.files) // store the result 
    console.log("result", result)

    // Send the response with a proper JSON object
    res.status(200).json({
      message: "File successfully uploaded",
      data: result,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error", details: error.message });
  }

}



export {
  upload,
}
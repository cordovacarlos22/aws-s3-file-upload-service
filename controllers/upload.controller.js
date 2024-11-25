import s3UploadV2 from "../config/s3Service.js";

// !single file upload
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

//! multiple file upload
const upload = async (req, res) => {

  try {


    if (!req.files) {

      return res.status(400).json({ message: 'No files uploaded' });
    }

    const results = await s3UploadV2(req.files) // store the result 


    res.status(200).json("files  successfully uploaded ", results);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error", details: error.message });
  }

}



export {
  upload,
}
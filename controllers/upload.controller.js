import s3UploadV3 from "../config/s3Service.js";
import Post from "../models/post.model.js";

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
    // Create a new post in your MongoDB database using the result data
    // You can add additional fields to the post model as needed. For example:
    // post.title = req.body.title
    // post.content = req.body.content
    // post.image = result.urls[0] // Assuming you have an array of URLs in the result object
    // const post = new Post(req.body)
    // await post.save()
    const post = await Post.create({
      ...req.body,
      image: result.urls, // Guarda las URLs en el campo `image`
    });

    res.status(200).json({
      message: "Post created successfully",
      post,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error", details: error.message });
  }

}



export {
  upload,
}
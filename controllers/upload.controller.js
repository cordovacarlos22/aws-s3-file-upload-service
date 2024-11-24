import { console } from "inspector";


const upload = async (req, res) => {
  console.log("req", req.files)
  try {


    if (!req.files) {

      return res.status(400).json({ message: 'No file uploaded' });
    }
    

    res.status(200).json("files  successfully uploaded ");
  } catch (error) {
    res.status(500).json('Error Uploading File:', error.message)
  }

}


export {
  upload,
}
import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  image: [{ type: String, required: true }], // For storing the image URL in MongoDB
  // author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, {
  timestamps: true,
});

const Post = mongoose.model('Post', postSchema);

export default Post;
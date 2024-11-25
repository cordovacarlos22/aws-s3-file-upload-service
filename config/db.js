import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

const connect = async (req, res) => {
  try {
    mongoose.connect(process.env.DB_CONNECT_URL);
    const { connection } = mongoose;

    connection.once("open", () => {
      console.log("MongoDB connected successfully 🟢");

      connection.on('error', (err) => {
        console.error('Database connection error: 🔴', err.message)
      })
    });
  } catch (error) {
    console.error('Error connecting to the database:', err.message)
  }

}

export { connect } 

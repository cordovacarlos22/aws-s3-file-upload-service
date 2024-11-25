import express from "express";
import dotenv from "dotenv";
import morgan from 'morgan';
import uploadRoutes from "./routes/upload.route.js";
import { connect } from "./config/db.js";


dotenv.config();

const PORT = process.env.PORT || 3000;


const app = express();

app.use(express.json());

// morgan test 
morgan.token('files', (req) => {
  // Safely stringify req.files or return 'No files' if undefined
  return req.files ? JSON.stringify(req.files) : 'No files uploaded';
});
app.use(morgan('tiny'));
app.use(morgan(':files'));

// Routes
app.use("/api/", uploadRoutes);



connect().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} 🟢`);
  });
});



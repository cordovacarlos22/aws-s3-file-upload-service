import express from "express";
import dotenv from "dotenv";

import uploadRoutes from "./routes/upload.route.js";


dotenv.config();

const PORT = process.env.PORT || 3000;


const app = express();

app.use(express.json());

app.use("/api/", uploadRoutes);

// Routes


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


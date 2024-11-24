import express from 'express';

import *  as uploadController from '../controllers/upload.controller.js';

import { uploadSingleFile } from '../middlewares/uploadFile.middleware.js';

const uploadRoutes = express.Router();

uploadRoutes.post('/upload', uploadSingleFile, uploadController.upload);



export default uploadRoutes;
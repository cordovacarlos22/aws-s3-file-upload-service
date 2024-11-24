import express from 'express';

import *  as uploadController from '../controllers/upload.controller.js';

import { uploadMultipleFiles } from '../middlewares/uploadFile.middleware.js';

const uploadRoutes = express.Router();

uploadRoutes.post('/upload', uploadMultipleFiles, uploadController.upload);



export default uploadRoutes;
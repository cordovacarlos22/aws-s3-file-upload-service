import express from 'express';

import *  as uploadController from '../controllers/upload.controller.js';

import { uploadSingleFileToS3, multerErrorHandler } from '../middlewares/uploadFile.middleware.js';

const uploadRoutes = express.Router();

uploadRoutes.post('/upload', multerErrorHandler(uploadSingleFileToS3), uploadController.upload);



export default uploadRoutes;
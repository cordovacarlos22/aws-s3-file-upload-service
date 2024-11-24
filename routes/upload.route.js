import express from 'express';

import *  as uploadController from '../controllers/upload.controller.js';

import { uploadMultipleFilesWithCustomName, multerErrorHandler } from '../middlewares/uploadFile.middleware.js';

const uploadRoutes = express.Router();

uploadRoutes.post('/upload', multerErrorHandler(uploadMultipleFilesWithCustomName), uploadController.upload);



export default uploadRoutes;
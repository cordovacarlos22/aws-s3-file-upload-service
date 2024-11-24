import express from 'express';

import *  as uploadController from '../controllers/upload.controller.js';

import { uploadMultipleFilesWithCustomName } from '../middlewares/uploadFile.middleware.js';

const uploadRoutes = express.Router();

uploadRoutes.post('/upload', uploadMultipleFilesWithCustomName, uploadController.upload);



export default uploadRoutes;
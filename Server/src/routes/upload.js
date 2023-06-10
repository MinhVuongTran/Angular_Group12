import express from 'express';
import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import { deleteImage, uploadImage } from '../controllers/upload.js';
import cloudinary from '../config/cloudinaryConfig.js';
const router = express.Router();

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'angular-group12',
        format: 'png',
    },
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 10 * 1024 * 1024 },
});

router.post('/images', upload.array('images', 15), uploadImage);
router.delete('/images/:publicId', deleteImage);

export default router;

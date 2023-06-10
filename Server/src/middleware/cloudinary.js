import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import multer from 'multer';

export const uploadMulter = (req, res, next) => {
    cloudinary.config({
        cloud_name: 'angulargroup12',
        api_key: '226353485221841',
        api_secret: 'zStJ7IDKpt2rIq4rAl0qVknO-0M',
    });

    const storage = new CloudinaryStorage({
        cloudinary: cloudinary,
        params: {
            folder: 'angular-group12',
            format: 'png',
            public_id: 'some_unique_id',
        },
    });

    const upload = multer({
        storage: storage,
        limits: {
            fileSize: 10 * 1024 * 1024,
        },
    });
    req.files = upload.array('images', 10);
    next();
};

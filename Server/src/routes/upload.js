import express from 'express';
import path from 'path';
import { __dirname } from '../index.js';
import sharp from 'sharp';
import multer from 'multer';
const uploadRouter = express.Router();
import { uploadImage } from '../controllers/upload.js';
import { getRandomFileName } from '../ultilities.js';

// Multer
const upload = multer({
    limits: { fileSize: 1024 * 1024 * 10 }, // giới hạn kích thước tệp là 10MB
});
// Route để xử lý yêu cầu tải lên tệp
// uploadRouter.post('/image', upload.array('images', 10), async (req, res) => {
//     const imageUrl = [];
//     // Xử lý các tệp đã tải lên
//     const promises = req.files.map(async (file) => {
//         const imageName = getRandomFileName() + '.png';
//         const imagePath = path.join(__dirname, `/public/${imageName}`);
//         console.log(file.buffer);
//         const image = sharp(file.buffer);
//         await image.toFile(imagePath);
//         imageUrl.push(imageName);
//     });
//     await Promise.all(promises);

//     console.log(imageUrl);
//     res.end(imageUrl);
// });

uploadRouter.post('/image', upload.single('image'), async function (req, res) {
    const imageName = getRandomFileName() + '.png';
    const imagePath = path.join(__dirname, `/public/${imageName}`);
    await sharp(req.file.buffer).toFile(imagePath);
    res.json(imageName);
    // res.end(imageName);
});
export default uploadRouter;

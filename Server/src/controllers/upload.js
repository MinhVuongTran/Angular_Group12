import sharp from 'sharp';
import path from 'path';
import { __dirname } from '../index.js';

import { getRandomFileName } from '../ultilities.js';

const uploadImage = async (req, res) => {
    const imageName = getRandomFileName() + '.png';
    const imagePath = path.join(__dirname, `/public/${imageName}`);
    await sharp(req.files).toFile(imagePath);
    res.end(imageName);
};

export { uploadImage };

import express from 'express';
import mongoose from 'mongoose';
import { fileURLToPath } from 'url';
import path from 'path';
import cors from 'cors';

import Router from './routes/index.js';

const app = express();
const port = 8080;

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('src/public'));
app.use(cors());

mongoose
    .connect('mongodb://127.0.0.1:27017/angular_group12')
    .then(() => console.log('Connect to DB successfully'))
    .catch(() => console.log('Connect to DB fail'));

Router(app);

app.listen(port, () => console.log(`App is running on port ${port}`));

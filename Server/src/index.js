import express from 'express';
import mongoose from 'mongoose';
import { fileURLToPath } from 'url';
import path from 'path';
import cors from 'cors';
import dotenv from 'dotenv';

import Router from './routes/index.js';

const app = express();
const port = 8080;
dotenv.config();
const DB_HOST = process.env.DB_HOST;

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('src/public'));
app.use(cors());

mongoose
    .connect(DB_HOST)
    .then(() => console.log('Connect to DB successfully'))
    .catch(() => console.log('Connect to DB fail'));

Router(app);

app.listen(port, () => console.log(`App is running on port ${port}`));

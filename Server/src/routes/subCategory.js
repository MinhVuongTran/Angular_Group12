import express from 'express';
import {
    create,
    get,
    getById,
    remove,
    update,
} from '../controllers/subCategory.js';

const subCategoryRouter = express.Router();

subCategoryRouter.get('/', get);
subCategoryRouter.get('/:id', getById);
subCategoryRouter.post('/', create);
subCategoryRouter.put('/:id', update);
subCategoryRouter.delete('/:id', remove);

export default subCategoryRouter;

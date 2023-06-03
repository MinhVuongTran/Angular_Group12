import express from 'express';
import {
    create,
    get,
    getById,
    remove,
    update,
} from '../controllers/category.js';

const categoryRouter = express.Router();

categoryRouter.get('/', get);
categoryRouter.get('/:id', getById);
categoryRouter.post('/', create);
categoryRouter.put('/:id', update);
categoryRouter.delete('/:id', remove);

export default categoryRouter;

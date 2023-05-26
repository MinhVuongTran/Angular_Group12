import express from 'express';
import {
    create,
    get,
    getById,
    remove,
    update,
} from '../controllers/product.js';

import authenticate from '../middleware/authenticate.js';

const productRouter = express.Router();

productRouter.get('/', get);
productRouter.get('/test', authenticate, (req, res) => {
    try {
        res.send({
            message: 'Request thành công',
        });
    } catch (err) {
        res.send({
            message: err,
        });
    }
});
productRouter.get('/:id', getById);
productRouter.post('/', create);
productRouter.put('/:id', update);
productRouter.delete('/:id', remove);

export default productRouter;

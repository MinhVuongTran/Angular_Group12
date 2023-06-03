import Joi from 'joi';

import { imageItemsValidate, specificationValidate } from './index.js';

const deviceValidate = Joi.object({
    name: Joi.string().required(),
    categoryId: Joi.string().required(),
    price: Joi.number(),
    original_price: Joi.number().required(),
    description: Joi.string().required(),
    images: Joi.array().items(imageItemsValidate).min(1).required(),
    brandId: Joi.string().required(),
    specifications: Joi.array().items(specificationValidate).min(1).required(),
    createdAt: Joi.date(),
});

export default deviceValidate;

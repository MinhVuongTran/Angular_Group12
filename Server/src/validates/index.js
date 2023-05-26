import Joi from 'joi';

const imageItemsValidate = Joi.object({
    base_url: Joi.string().required(),
    is_gallery: Joi.boolean().required(),
    label: Joi.string(),
    large_url: Joi.string().required(),
    medium_url: Joi.string().required(),
    position: Joi.string(),
    small_url: Joi.string().required(),
    thumbnail_url: Joi.string().required(),
});

const attributeValidate = Joi.object({
    code: Joi.string().required(),
    name: Joi.string().required(),
    value: Joi.string().required(),
});

const specificationValidate = Joi.object({
    name: Joi.string().required(),
    attributes: Joi.array().items(attributeValidate).min(1),
});

export { imageItemsValidate, specificationValidate };

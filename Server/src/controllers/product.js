import Joi from 'joi';

import productModel from '../models/product.js';

const productValidate = Joi.object({
    name: Joi.string().required(),
    price: Joi.number(),
    description: Joi.string(),
    images: Joi.array().min(1),
    infos: Joi.array().min(1),
    categoryId: Joi.string().required(),
    subCategoryId: Joi.string().required(),
});

const get = async (req, res) => {
    try {
        const data = await productModel.find().populate([
            {
                path: 'categoryId',
                select: ['name', 'slug'],
            },
            {
                path: 'subCategoryId',
                select: ['name', 'slug'],
            },
        ]);
        res.send({
            data,
        });
    } catch (err) {
        res.status(500).send({
            message: err,
        });
    }
};

const getById = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await productModel.findById(id);
        res.send({
            data,
        });
    } catch (err) {
        res.status(500).send({
            message: err,
        });
    }
};

const create = async (req, res) => {
    try {
        const body = req.body;
        const { error } = productValidate.validate(body);
        if (error) {
            res.status(500).send({
                message: error.message,
            });
        } else {
            const data = await productModel.create(body);
            res.send({
                message: 'Create successfully',
                data,
            });
        }
    } catch (err) {
        res.status(500).send({
            message: err,
        });
    }
};

const update = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const { error } = productValidate.validate(body);
        if (error) {
            res.status(500).send({
                message: error.message,
            });
        } else {
            const data = await productModel.findByIdAndUpdate(id, body);
            res.send({
                message: 'Update successfully',
                data,
            });
        }
    } catch (err) {
        res.status(500).send({
            message: err,
        });
    }
};

const remove = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await productModel.findByIdAndDelete(id);
        res.send({
            message: 'Delete successfully',
            data,
        });
    } catch (err) {
        res.status(500).send({
            message: err,
        });
    }
};

export { get, getById, create, update, remove };

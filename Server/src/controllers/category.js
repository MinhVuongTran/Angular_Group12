import Joi from 'joi';

import categoryModel from '../models/category.js';

const categoryValidate = Joi.object({
    name: Joi.string().required(),
});

const get = async (req, res) => {
    try {
        const data = await categoryModel.aggregate([
            {
                $lookup: {
                    from: 'subcategories',
                    localField: '_id',
                    foreignField: 'categoryId',
                    as: 'subCategories',
                },
            },
            {
                $project: {
                    name: 1,
                    slug: 1,
                    'subCategories.name': 1,
                    'subCategories.slug': 1,
                },
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
        const data = await categoryModel.findById(id);
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
        const { error } = categoryModel.validate(body);
        if (error) {
            res.status(500).send({
                message: error.message,
            });
        } else {
            const data = await categoryModel.create(body);
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
        const { error } = categoryModel.validate(body);
        if (error) {
            res.status(500).send({
                message: error.message,
            });
        } else {
            const data = await categoryModel.findByIdAndUpdate(id, body);
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
        const data = await categoryModel.findByIdAndDelete(id);
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

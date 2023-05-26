import mongoose, { SchemaType } from 'mongoose';

const { Schema } = mongoose;

const imageModel = new Schema({
    base_url: {
        type: String,
    },
    another_url: {
        type: Schema.Types.Array,
    },
});

const infoModel = new Schema({
    color: {
        type: String,
    },
    material: {
        type: String,
    },
    style: {
        type: String,
    },
    desc: {
        type: String,
    },
});

const productModel = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
        },
        images: [imageModel],
        infos: [infoModel],
        categoryId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'categories',
            required: true,
        },
        subCategoryId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'subCategories',
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    { versionKey: false },
);

export default mongoose.model('products', productModel);

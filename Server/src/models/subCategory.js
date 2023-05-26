import mongoose from 'mongoose';
import slugUpdater from 'mongoose-slug-updater';

const { Schema } = mongoose;
mongoose.plugin(slugUpdater);

const subCategoryModel = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        slug: {
            type: String,
            slug: 'name',
            separator: '-',
            unique: true,
        },
        categoryId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'categories',
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    { versionKey: false },
);

export default mongoose.model('subCategories', subCategoryModel);

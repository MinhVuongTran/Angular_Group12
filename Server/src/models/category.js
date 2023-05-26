import mongoose from 'mongoose';
import slugUpdater from 'mongoose-slug-updater';

const { Schema } = mongoose;
mongoose.plugin(slugUpdater);

const categoryModel = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        slug: {
            type: String,
            slug: 'name',
            separator: '-',
            unique: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    { versionKey: false },
);

export default mongoose.model('categories', categoryModel);

import categoryRouter from './category.js';
import productRouter from './product.js';
import subCategoryRouter from './subCategory.js';
import uploadRouter from './upload.js';
import userRouter from './user.js';

function Router(app) {
    app.use('/api/products', productRouter);
    app.use('/api/categories', categoryRouter);
    app.use('/api/subCategories', subCategoryRouter);
    app.use('/auth', userRouter);
    app.use('/upload', uploadRouter);
}

export default Router;

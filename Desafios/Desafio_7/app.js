import express from 'express'
import productsRouter from './src/routers/products.js';
import compression from 'express-compression';

const app = express();
const PORT = 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(compression({
    brotli: { enabled: true, zlib: {} },
    zlib: {}
}));app.use("/mockingproducts", productsRouter)





app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
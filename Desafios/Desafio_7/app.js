import express from 'express';
import productsRouter from './src/routers/products.js';
import compression from 'express-compression';
import errorHandler from "./src/middleware/index.js";

const app = express();
const PORT = 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(compression({
  brotli: { enabled: true, zlib: {} },
  zlib: {}
}));

app.use("/mockingproducts", productsRouter);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});

import { Router } from "express";
import { generateProducts } from "../../utils.js";
import EErrors from "../services/enum.js";
import CartError from "../services/CartErrors.js";
import { generateProductCreationErrorInfo } from "../services/info.js";

const router = Router();

router.get("/", async (req, res, next) => {
  let products = [];

  try {
    for (let i = 0; i < 100; i++) {
      const product = generateProducts();

      if (!product.title || isNaN(product.price)) {
        return next(CartError.createError({
          name: "ProductCreationError",
          cause: `Invalid product data: ${JSON.stringify(product)}`,
          message: generateProductCreationErrorInfo(product),
          code: EErrors.PRODUCT_CREATION_ERROR,
          details: { product }
        }));
      }

      products.push(product);
    }
    res.send({ status: "Get correcto", payload: products, quantity: products.length });
  } catch (error) {
    next(error);
  }
});

export default router;

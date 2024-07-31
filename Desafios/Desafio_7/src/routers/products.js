import { Router } from "express";
import { generateProducts } from "../../utils.js";
import EErrors from "../services/enum.js";
import CartError from "../services/CartErrors.js";
import { generateProductCreationErrorInfo } from "../services/info.js";
const router = Router();

router.get("/", async (req, res) => {
    let products = [];
  
    try {
      for (let i = 0; i < 100; i++) {
        const product = generateProducts();
  
        if (!product.title || !product.price) {
          CartError.createError({
            name: "ProductCreationError",
            cause: `Invalid product data`,
            message: generateProductCreationErrorInfo(product),
            code: EErrors.PRODUCT_CREATION_ERROR,
            details: { product }
          });
        }
  
        products.push(product);
      }
      res.send({ status: "Get correcto", payload: products, quantity: products.length });
    } catch (error) {
      console.error("Error al generar productos:", error);
      res.status(500).json({
        error: error.name,
        message: error.message,
        code: error.code,
        details: error.details
      });
    }
  });

export default router;

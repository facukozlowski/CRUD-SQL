import { Router } from "express";
import {
  createProduct,
  getProducts,
  getProductById,
  deleteProduct,
  getTotalProducts,
  updateProductById,
} from "../controllers/products.controllers";

const router = Router();

router.get("/products", getProducts);

router.post("/products", createProduct);

router.get("/products/count", getTotalProducts);

router.get("/products/:id", getProductById);

router.delete("/products/:id", deleteProduct);

router.put("/products/:id", updateProductById);

export default router;

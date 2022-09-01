import { Router } from "express";
import { methods as productController } from "./../controllers/product.controller.js";

const router = Router();

router.get("/", productController.getProducts); // GET http://localhost:5000/api-restfull/products/
router.get("/:id", productController.getProduct); // GET http://localhost:5000/api-restfull/products/:sku
router.post("/", productController.addProduct); // POST http://localhost:5000/api-restfull/products/
router.put("/:id", productController.updateProduct); // PUT http://localhost:5000/api-restfull/products/:sku
router.delete("/:sku", productController.deleteProduct); // DELETE http://localhost:5000/api-restfull/products/:sku

export default router;
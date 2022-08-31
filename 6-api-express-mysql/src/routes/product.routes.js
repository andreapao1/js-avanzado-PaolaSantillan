import { Router } from "express";
import { methods as productController } from "./../controllers/product.controller";

const router = Router();

router.get("/", productController.getProduct);
router.get("/:sku", productController.getProduct);
router.post("/", productController.addProduct);
router.put("/:sku", productController.updateProduct);
router.delete("/:sku", productController.deleteProduct);

export default router;
import { Router } from "express";
import { get_orders, checkout } from "../controllers/orderController";
const router = Router();

router.get("/order/:id", get_orders);
router.post("/order/:id", checkout);

export default router;

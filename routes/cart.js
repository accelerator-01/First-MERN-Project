import { Router } from "express";
import {
  get_cart_items,
  add_cart_item,
  update_cart_item,
  delete_item,
} from "../controllers/cartController";
const router = Router();

router.get("/cart/:id", get_cart_items);
router.post("/cart/:id", add_cart_item);
router.put("/cart/:id", update_cart_item);
router.delete("/cart/:userId/:itemId", delete_item);

export default router;

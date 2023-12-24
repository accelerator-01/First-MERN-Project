import { Router } from "express";
import {
  get_items,
  post_item,
  update_item,
  delete_item,
} from "../controllers/itemController";

const router = Router();

router.get("/items", get_items);
router.post("/items", post_item);
router.put("/items/:id", update_item);
router.delete("/items/:id", delete_item);

export default router;

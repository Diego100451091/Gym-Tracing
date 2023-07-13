import { Router } from "express";
import {
  getSets,
  getSet,
  createSet,
  deleteSet,
} from "../controllers/sets.controller.js";
import { authRequired } from "../middlewares/validateToken.js";

const router = Router();

router.get("/sets", authRequired, getSets);
router.get("/sets/:id", authRequired, getSet);
router.post("/sets", authRequired, createSet);
router.delete("/sets/:id", authRequired, deleteSet);

export default router;

import { Router } from "express";
import {
  getSets,
  getSet,
  createSet,
  deleteSet,
} from "../controllers/sets.controller.js";
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createSetSchema, findSetSchema } from "../schemas/set.schema.js";

const router = Router();

router.get("/sets", authRequired, getSets);

router.get("/sets/:id", authRequired, getSet);

router.post("/sets", authRequired, validateSchema(createSetSchema), createSet);

router.delete("/sets/:id", authRequired, deleteSet);

export default router;

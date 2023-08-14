import { Router } from "express";
import {
  getWorkoutRecords,
  getWorkoutRecord,
  createWorkoutRecord,
  deleteWorkoutRecord,
} from "../controllers/workoutRecord.controller.js";
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createWorkoutRecordSchema } from "../schemas/workoutRecord.shema.js";

const router = Router();

router.get("/workoutRecords", authRequired, getWorkoutRecords);

router.get("/workoutRecords/:id", authRequired, getWorkoutRecord);

router.post("/workoutRecords", authRequired, validateSchema(createWorkoutRecordSchema), createWorkoutRecord);

router.delete("/workoutRecords/:id", authRequired, deleteWorkoutRecord);

export default router;

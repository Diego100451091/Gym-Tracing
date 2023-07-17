import { Router } from "express";
import {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
} from "../controllers/workout.controller.js";
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createWorkoutSchema } from "../schemas/workout.schema.js";

const router = Router();

router.get("/workouts", authRequired, getWorkouts);

router.get("/workouts/:id", authRequired, getWorkout);

router.post("/workouts", authRequired, validateSchema(createWorkoutSchema), createWorkout);

router.delete("/workouts/:id", authRequired, deleteWorkout);

export default router;

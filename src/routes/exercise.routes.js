import { Router } from "express";
import {
  getExercises,
  getExercise,
  getExerciseGif,
  getBodyParts,
  getTargetMuscles,
  getEquipments,
} from "../controllers/exercise.controller.js";
import { authRequired } from "../middlewares/validateToken.js";

const router = Router();

router.get("/exercises", authRequired, getExercises);

router.get("/exercise/:id", authRequired, getExercise);

router.get("/exercises/bodyParts/", getBodyParts);

router.get("/exercises/targetMuscles/", getTargetMuscles);

router.get("/exercises/equipments/", getEquipments);

router.get("/exercises/gifs/:gifId", getExerciseGif);


export default router;

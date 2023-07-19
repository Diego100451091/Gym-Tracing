import { Router } from "express";
import {
  getExercises,
  getExerciseGif,
  getBodyParts,
  getTargetMuscles,
  getEquipments,
} from "../controllers/exercise.controller.js";
import { authRequired } from "../middlewares/validateToken.js";

const router = Router();

router.get("/exercises", authRequired, getExercises);

router.get("/exercises/gifs/:gifId", getExerciseGif);

router.get("/exercises/bodyParts/", authRequired, getBodyParts);

router.get("/exercises/targetMuscles/",authRequired, getTargetMuscles);

router.get("/exercises/equipments/", authRequired, getEquipments);


export default router;

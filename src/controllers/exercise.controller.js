import { exercises, bodyParts, equipments, targetMuscles } from "../resources/ejercises2.js";
import path from 'path';
import fs from "fs-extra";
import { fileURLToPath } from 'url';


export const getExercises = async (req, res) => {
  res.json(exercises);
};

export const getBodyParts = async (req, res) => {
  res.json(bodyParts)
};

export const getTargetMuscles = async (req, res) => {
  res.json(targetMuscles);
};

export const getEquipments = async (req, res) => {
  res.json(equipments);
};

export const getExerciseGif = async (req, res) => {
  try {
    const gifId = req.params.gifId;

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    let gifPath = path.resolve(__dirname, `../resources/gifs/${gifId}.gif`);

    if (fs.existsSync(gifPath)) {
      res.sendFile(gifPath);
    } else {
        return res.status(404).json({ error: 'GIF not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}


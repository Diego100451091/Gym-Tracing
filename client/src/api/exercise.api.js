import axios from "./axios.js";

export const requestExercises = () => axios.get("/exercises");

export const requestExercise = (id) => axios.get(`/exercise/${id}`);

export const requestBodyPartList = () =>
  axios.get("/exercises/bodyParts");

export const requestTargetMuscleList = () =>
  axios.get("/exercises/targetMuscles");

export const requestEquipementList = () =>
  axios.get("/exercises/equipments");

export const makeApiRequest = async (apiRequest) => {
  try {
    const response = await apiRequest();
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

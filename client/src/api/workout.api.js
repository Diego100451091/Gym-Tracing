import axios from "./axios.js";

export const requestWorkouts = () => axios.get("/workouts");

export const requestWorkout = (workoutId) => axios.get(`/workouts/${workoutId}`);

export const requestCreateWorkout = (workout) => axios.post("/workouts", workout);

export const requestDeleteWorkout = (workoutId) => axios.delete(`/workouts/${workoutId}`);
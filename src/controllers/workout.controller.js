import Workout from "../models/workout.model.js";

export const getWorkouts = async (req, res) => {
  // Get the workouts asociated with the user loged
  const workouts = await Workout.find({ user: req.user.id });
  // Return the workouts
  res.json(workouts);
};

export const createWorkout = async (req, res) => {
  const { name, description, exercises } = req.body;

  // Create a new workout
  const newWorkout = new Workout({
    user: req.user.id,
    name: name,
    description: description,
    exercises: exercises,
  });
  // Save the workout
  const savedWorkout = await newWorkout.save();
  // Return the workout
  res.json(savedWorkout);
};

export const getWorkout = async (req, res) => {
  // Search the workout with the user and the param id of the request
  const workout = await Workout.findOne({ user: req.user.id, _id: req.params.id });
  if (!workout) return res.status(404).json({ message: "Workout not found" });
  res.json(workout);
};

export const deleteWorkout = async (req, res) => {
  // Search the workout with the user and the param id of the request
  const workout = await Workout.findOne({ user: req.user.id, _id: req.params.id });
  if (!workout) return res.status(404).json({ message: "Workout not found" });
  // Delete the workout
  await Workout.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
};

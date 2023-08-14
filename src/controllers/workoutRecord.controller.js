import WorkoutRecord from "../models/workoutRecord.model.js";

export const getWorkoutRecords = async (req, res) => {
  // Get the workout records asociated with the user loged
  const workoutRecords = await WorkoutRecord.find({ user: req.user.id });
  // Return the workout records
  res.json(workoutRecords);
};

export const createWorkoutRecord = async (req, res) => {
  const { workoutId, exercises } = req.body;
 
  // Create a new workout record
  const newWorkoutRecord = new WorkoutRecord({
    user: req.user.id,
    workoutId: workoutId,
    exercises: exercises,
  });
  // Save the workout record
  const savedWorkoutRecord = await newWorkoutRecord.save();
  // Return the workout record
  res.json(savedWorkoutRecord);
};

export const getWorkoutRecord = async (req, res) => {
  // Search the workout record with the user and the param id of the request
  const workoutRecord = await WorkoutRecord.findOne({ user: req.user.id, _id: req.params.id });
  if (!workoutRecord) return res.status(404).json({ message: "Workout record not found" });
  res.json(workoutRecord);
};

export const deleteWorkoutRecord = async (req, res) => {
  // Search the workout record with the user and the param id of the request
  const workoutRecord = await WorkoutRecord.findOne({ user: req.user.id, _id: req.params.id });
  if (!workoutRecord) return res.status(404).json({ message: "Workout not found" });
  // Delete the workout record
  await WorkoutRecord.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
};

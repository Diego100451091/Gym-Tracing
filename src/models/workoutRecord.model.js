import { Schema, model } from "mongoose";

const setSchema = new Schema({
  weight: {
    type: Number,
    required: true,
  },
  reps: {
    type: Number,
    required: true,
  },
});

const warmupSchema = new Schema({
  weight: {
    type: Number,
  },
  reps: {
    type: Number,
  },
});

const exerciseSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  warmup: {
    type: warmupSchema,
    required: false,
  },
  sets: {
    type: [setSchema],
    required: true,
  },
});

const WorkoutRecordSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  workoutId: {
    type: Schema.Types.ObjectId,
    ref: "Workout",
    required: true,
  },
  exercises: {
    type: [exerciseSchema],
    required: true,
  }
}, {
  timestamps: true,
});

export default model("WorkoutRecord", WorkoutRecordSchema);

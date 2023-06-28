import { Schema, model } from "mongoose";

const setSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  exercices: {
    type: [Number],
  },
},{
    timestamps: true,
});

export default model("ExerciseSet", setSchema);

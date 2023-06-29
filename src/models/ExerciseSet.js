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
    type: [String],
  },
},{
    timestamps: true,
});

export default model("ExerciseSet", setSchema);

import { Schema, model } from "mongoose";

const setSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  exercises: {
    type: [String],
  },
},{
    timestamps: true,
});

export default model("ExerciseSet", setSchema);

import { Schema, model } from "mongoose";

const setSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  exercises: {
    type: [String],
    required: true,
  },
},{
    timestamps: true,
});

export default model("Set", setSchema);

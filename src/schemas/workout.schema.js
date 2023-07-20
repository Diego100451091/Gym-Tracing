import { z } from "zod";

export const createWorkoutSchema = z.object({
  name: z
    .string({
      required_error: "Name is required",
    })
    .min(3, "Description should have at least 3 character")
    .max(32, "Name should have maximum length as 32 character"),
  description: z
    .string({
      required_error: "Description must be a string",
    })
    .min(3, "Description should have at least 3 character")
    .max(256, "Description should have maximum length as 256 character"),
  exercises: z
    .array(
      z.string({
        required_error: "Exercises must be an array of strings",
      }))
    .min(1, "Exercises must have at least 1 string"),
});

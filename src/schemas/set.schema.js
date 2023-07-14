import { z } from "zod";

export const createSetSchema = z.object({
  name: z
    .string({
      required_error: "Name is required",
    })
    .max(64, "Name should have maximum length as 64 character"),
  description: z
    .string({
      required_error: "Description must be a string",
    })
    .max(256, "Description should have maximum length as 256 character")
    .optional(),
  exercises: z
    .array(
      z.string({
        required_error: "Exercises must be an array of strings",
      }))
    .min(1, "Exercises must have at least 1 string"),
});

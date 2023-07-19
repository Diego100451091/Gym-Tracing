import { z } from "zod";
export const workoutSchema = z.object({
  name: z
    .string({
      required_error: "Title is required",
    })
    .min(3, "Title must be at least 3 characters long")
    .max(64, "Title must be less than 64 characters long"),
  description: z
    .string({
      required_error: "Description is required",
    })
    .min(3, "Description must be at least 3 characters long")
    .max(256, "Description must be less than 20 characters long"),
});

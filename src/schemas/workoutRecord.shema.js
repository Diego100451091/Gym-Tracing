import { z } from "zod";

const exerciseSetSchema = z.object({
  weight: z.number(),
  reps: z.number(),
});

const warmupSchema = z.union([
  z.null(),
  z.object({
    weight: z.number(),
    reps: z.number(),
  }),
]);

const workoutRecordSchema = z.array({
  id: z.string(),
  warmup: warmupSchema,
  sets: z.array(exerciseSetSchema),
});

export const createWorkoutRecordSchema = z.record(workoutRecordSchema);

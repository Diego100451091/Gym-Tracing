import { z } from "zod";
export const registerSchema = z
  .object({
    username: z
      .string({
        required_error: "Username is required",
      })
      .min(3, "Username must be at least 3 characters long")
      .max(20, "Username must be less than 20 characters long"),
    email: z
      .string({
        required_error: "Email is required",
      })
      .email({
        message: "Email is not valid",
      }),
    password: z
      .string({
        required_error: "Password is required",
      })
      .min(8, "Password must be at least 8 characters long")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number"),
    passwordConfirmation: z
      .string({
        required_error: "Password confirmation is required",
      })
      .min(8, "Password confirmation must be at least 8 characters long")
      .regex(
        /[A-Z]/,
        "Password confirmation must contain at least one uppercase letter"
      )
      .regex(
        /[a-z]/,
        "Password confirmation must contain at least one lowercase letter"
      )
      .regex(/[0-9]/, "Password confirmation must contain at least one number"),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords don't match",
    path: ["passwordConfirmation"],
  });

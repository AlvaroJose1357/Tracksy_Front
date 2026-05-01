import type z from "zod";
import type {
  loginFormSchema,
  registerFormSchema,
  userSchema,
} from "@/schemas/User";

export type RegisterForm = z.infer<typeof registerFormSchema>;
export type User = z.infer<typeof userSchema>;
export type LoginForm = z.infer<typeof loginFormSchema>;

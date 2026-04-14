import { z } from "zod";
import type { LoginForm, User } from "@/types/user";

export const userSchema: z.ZodType<User> = z.object({
  name: z.string(),
  email: z.email(),
  _id: z.string(),
  description: z.string(),
});

export const loginFormSchema: z.ZodType<LoginForm> = z.object({
  email: z.email(),
  password: z.string().min(1, "La contraseña es obligatoria"),
});

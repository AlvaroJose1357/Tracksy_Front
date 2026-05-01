import { z } from "zod";

export const userSchema = z.object({
  name: z.string(),
  email: z.email(),
  _id: z.string(),
  description: z.string(),
});

export const loginFormSchema = z.object({
  email: z.email(),
  password: z.string().min(1, "La contraseña es obligatoria"),
});

export const registerFormSchema = z.object({
  name: z.string().min(1, "El nombre es obligatorio"),
  email: z.email(),
  password: z.string().min(8, "La contraseña debe tener al menos 8 caracteres"),
  password_confirmation: z
    .string()
    .min(1, "La confirmación es obligatoria")
    .optional(),
});

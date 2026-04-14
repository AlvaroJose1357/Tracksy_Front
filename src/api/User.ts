import api from "@/config/axios";
import {
  loginFormSchema,
  userSchema,
} from "@/schemas/User";
import type { LoginForm, RegisterForm, User } from "@/types/user";

/** POST /auth/login */
export async function loginUser(body: LoginForm): Promise<User> {
  const payload = loginFormSchema.parse(body);
  const { data } = await api.post<unknown>("/auth/login", payload);
  return userSchema.parse(data);
}

/** POST /auth/register */
export async function registerUser(body: RegisterForm): Promise<User> {
  const { data } = await api.post<unknown>("/auth/register", body);
  return userSchema.parse(data);
}

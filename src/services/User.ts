import * as userApi from "@/api/User";
import type { LoginForm, RegisterForm } from "@/types/user";

export async function login(credentials: LoginForm) {
  return userApi.loginUser(credentials);
}

export async function registerAccount(credentials: RegisterForm) {
  return userApi.registerUser(credentials);
}

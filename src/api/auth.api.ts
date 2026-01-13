import { http } from "./http";
import { endpoints } from "./endpoints";

export type Role = "Admin" | "Doctor" | "Patient";

export type AuthResponse = {
  accessToken: string;
  role: Role;
  userId: string;
  email: string;
};

export type MeResponse = {
  id: string;
  email: string;
  role: Role;
};

export async function login(email: string, password: string) {
  const res = await http.post<AuthResponse>(endpoints.auth.login, { email, password });
  return res.data;
}

export async function register(payload: Record<string, unknown>) {
  const res = await http.post<AuthResponse>(endpoints.auth.register, payload);
  return res.data;
}

export async function me() {
  const res = await http.get<MeResponse>(endpoints.auth.me);
  return res.data;
}

import { createContext } from "react";
import type { MeResponse } from "../api/auth.api";

export type User = MeResponse;

export type AuthState = {
  user: User | null;
  isReady: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

export const AuthCtx = createContext<AuthState | null>(null);

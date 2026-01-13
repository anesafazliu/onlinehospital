import { useEffect, useMemo, useState, type ReactNode } from "react";
import * as AuthApi from "../api/auth.api";
import { clearAccessToken, getAccessToken, setAccessToken } from "./token";
import { AuthCtx, type User } from "./auth.context";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const token = getAccessToken();
        if (!token) {
          setUser(null);
          return;
        }
        setUser(await AuthApi.me());
      } catch {
        clearAccessToken();
        setUser(null);
      } finally {
        setIsReady(true);
      }
    })();
  }, []);

  const login = async (email: string, password: string) => {
    const res = await AuthApi.login(email, password);
    setAccessToken(res.accessToken);
    setUser(await AuthApi.me());
  };

  const logout = () => {
    clearAccessToken();
    setUser(null);
  };

  const value = useMemo(() => ({ user, isReady, login, logout }), [user, isReady]);

  return <AuthCtx.Provider value={value}>{children}</AuthCtx.Provider>;
}

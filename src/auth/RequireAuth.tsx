import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./useAuth";
import type { Role } from "../api/auth.api";

export function RequireAuth({
  children,
  role,
}: {
  children: React.ReactNode;
  role?: Role;
}) {
  const { user, isReady } = useAuth();

  if (!isReady) return null;
  if (!user) return <Navigate to="/login" replace />;

  if (role && user.role !== role) return <Navigate to="/403" replace />;

  return <>{children}</>;
}

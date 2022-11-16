import { Navigate } from "react-router-dom";
// hooks
import { useAuth } from "../hooks/useAuth";

// ----------------------------------------------------------------------

export function GuestGuard({ children }) {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
}

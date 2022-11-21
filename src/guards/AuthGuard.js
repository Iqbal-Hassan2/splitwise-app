import { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
// hooks
import { useAuth } from "../hooks/useAuth";
// import { Login } from "../pages/Login";
// pages

// ----------------------------------------------------------------------

export function AuthGuard({ children }) {
  const { isAuthenticated } = useAuth();
  const { pathname } = useLocation();
  const [requestedLocation, setRequestedLocation] = useState(null);
  if (!isAuthenticated) {
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname);
    }
    return <Navigate to="/" replace />;
  } else {
    if (requestedLocation && pathname !== requestedLocation) {
      setRequestedLocation(null);
      return <Navigate to={requestedLocation} replace />;
    }

    return <>{children}</>;
  }
}

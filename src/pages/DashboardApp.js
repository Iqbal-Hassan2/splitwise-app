import React from "react";
import { useAuth } from "../hooks/useAuth";

export function DashboardApp() {
  const { logout } = useAuth();
  return (
    <div>
      <button
        onClick={() => {
          logout();
        }}
      >
        logout
      </button>
    </div>
  );
}

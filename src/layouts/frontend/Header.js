import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/logo/Logo";
import { useAuth } from "../../hooks/useAuth";

export function Header() {
  const auth = useAuth();
  return (
    <div className="container mx-auto">
      <header className="flex items-center justify-between px-8 py-5 font-mont mx-auto">
        <Logo />

        <div
          id="guest"
          className="flex items-center text-xs sm:text-sm md:text-normal font-normal"
        >
          {auth.user ? (
            <>
              {/* <Link to="/account">Account ({auth.user.email})</Link> */}
              <Button onClick={() => auth.signout()}>Signout</Button>
            </>
          ) : (
            <div className="dropdown relative">
              <Link
                className="dropdown-reveal text-teal px-4 block cursor-pointer font-mont font-semibold"
                to="/login"
              >
                Log in
              </Link>
            </div>
          )}

          <a
            className="bg-teal text-white px-3 py-2 sm:px-5 sm:py-3 rounded shadow sm-cta-button"
            href="/signup"
          >
            Sign up
          </a>
        </div>
      </header>
    </div>
  );
}

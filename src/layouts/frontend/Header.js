import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/logo/Logo";

export function Header() {
  return (
    <div className="container mx-auto">
      <header className="flex items-center justify-between px-8 py-5 font-mont mx-auto">
        <Logo />

        <div
          id="guest"
          className="flex items-center text-xs sm:text-sm md:text-normal font-normal"
        >
          <Link
            className="bg-teal text-white px-3 py-2 sm:px-5 sm:py-3 rounded shadow sm-cta-button"
            to="/admin"
          >
            Log in
          </Link>
        </div>
      </header>
    </div>
  );
}

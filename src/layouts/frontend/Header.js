import React from "react";
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
          <div className="dropdown relative">
            <a
              className="dropdown-reveal text-teal px-4 block cursor-pointer font-mont font-semibold"
              href="/login"
            >
              Log in
            </a>
          </div>
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

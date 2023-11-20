import React from "react";
import { NavLink } from "react-router-dom";

export function LandingPage() {
  return (
    <div>
      <div
        className="relative h-screen flex flex-col items-center justify-center text-center"
        style={{
          backgroundImage:
            'url("https://i.pinimg.com/originals/35/1f/2c/351f2cce1ee97b2cb9e4869248e8af19.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>{" "}
        <div className="absolute inset-0 backdrop-filter backdrop-blur-sm"></div>{" "}
        <h1 className="relative z-10 mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white lower-heading">
          Explore the Rick and Morty Multiverse
        </h1>
        <p className="relative z-10 mb-6 text-lg font-normal text-white lg:text-xl sm:px-32 xl:px-96 dark:text-gray-400 lower-text">
          Discover detailed information about your favorite characters and delve
          into the fascinating universe of Rick and Morty through our exclusive
          API.
        </p>
        <NavLink
          to="/multiverse"
          className="relative z-10 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-grey-900 bg-[#c0df40] rounded-lg hover:bg-[#9db728] focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
        >
          See more
          <svg
            className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </NavLink>
      </div>
    </div>
  );
}

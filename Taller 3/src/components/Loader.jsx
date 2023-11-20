import React from "react";
import "ldrs/ring";

export function Loader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
    <l-ring
      size="40"
      stroke="5"
      bg-opacity="0"
      speed="2"
      color="black"
    ></l-ring>
  </div>
  );
}

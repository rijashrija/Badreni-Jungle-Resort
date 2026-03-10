import React from "react";

export default function Button({
  children,
  onClick,
  className = "",
  type = "button",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
      text-xs sm:text-sm md:text-base
      px-3 sm:px-4 md:px-5
      py-1 sm:py-2
      rounded
      transition-all duration-300
      ${className}
      `}
    >
      {children}
    </button>
  );
}

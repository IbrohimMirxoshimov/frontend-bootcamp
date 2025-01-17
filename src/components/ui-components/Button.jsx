import React from "react";

export function Button({ onClick, className, children }) {
  return (
    <button
      onClick={onClick}
      className={
        "rounded-xl bg-cyan-600 text-white px-4 py-2 text-2xl font-semibold " +
        className
      }
    >
      {children}
    </button>
  );
}

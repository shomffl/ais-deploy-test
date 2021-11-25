import React from "react";

export const Button: React.FC = ({ children }) => {
  return (
    <button
      type="submit"
      className="py-2 px-4 mx-auto bg-green-500 text-white font-semibold w-44 rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
    >
      {children}
    </button>
  );
};

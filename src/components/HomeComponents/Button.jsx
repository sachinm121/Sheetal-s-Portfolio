import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const Button = ({ children, active, resume }) => {
  return (
    <div>
      <a href={`${resume}`} target="_blank" download>
        <div
          className={`text-center text-[1em] px-6 py-3 rounded-md font-bold button2
        ${
          active ? "bg-yellow-50 text-white button1 button2" : "bg-gray-800"
        } hover:scale-95 transition-all duration-200
        sm:px-4 sm:py-2 md:px-8 md:py-4 lg:px-10 lg:py-5 xl:px-10 xl:py-4
        `}
        >
          {children}
        </div>
      </a>
    </div>
  );
};

export default Button;

import React, { useState, useEffect } from "react";
import { FaMoon } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";


function Darkmode() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={toggleDarkMode}
        className="p-3 rounded-full bg-white hover:bg-blue-700  dark:bg-black dark:hover:bg-blue-700"
      >
        {darkMode ? (
          <IoIosSunny className=" w-6 h-6 text-white " />
        ) : (
          <FaMoon   className="w-6 h-6 text-slate-900 hover:text-white " />
        )}
      </button>
    </div>
  );
}

export default Darkmode;


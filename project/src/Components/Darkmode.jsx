import React, { useState, useEffect } from "react";
import { FaRegMoon } from "react-icons/fa";
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
    <div className=" bg-white dark:bg-gray-900 flex items-center justify-center">
      <button
        onClick={toggleDarkMode}
        className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full"
      >
        {darkMode ? (
          <IoIosSunny className=" w-6 h-6 text-yellow-500" />
        ) : (
          <FaRegMoon  className="w-6 h-6 text-gray-500" />
        )}
      </button>
    </div>
  );
}

export default Darkmode;

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
    <div className="flex items-center justify-center">
      <button
        onClick={toggleDarkMode}
        className="p-3 rounded-full bg-white dark:bg-black"
      >
        {darkMode ? (
          <IoIosSunny className=" w-6 h-6 text-white " />
        ) : (
          <FaRegMoon  className="w-6 h-6 text-slate-900 " />
        )}
      </button>
    </div>
  );
}

export default Darkmode;

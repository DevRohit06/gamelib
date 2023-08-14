"use client";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useState } from "react";
import useDarkSide from "../hooks/useDarkMode";
export default function Switcher() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );
  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };
  return (
    <>
      <div className="p-1 bg-gray-400 rounded-xl">
        <DarkModeSwitch
          style={{}}
          checked={darkSide}
          onChange={toggleDarkMode}
          size={25}
        />
      </div>
    </>
  );
}

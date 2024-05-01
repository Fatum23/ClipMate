import { useState } from "react";
import { IoIosSunny } from "react-icons/io";
import { IoMoon } from "react-icons/io5";

export default function ThemePicker() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  return (
    <button
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
        document.documentElement.classList.toggle("theme-dark");
      }}
    >
      {theme === "light" ? (
        <IoIosSunny size={24} color="black" />
      ) : (
        <IoMoon size={24} color="white" />
      )}
    </button>
  );
}

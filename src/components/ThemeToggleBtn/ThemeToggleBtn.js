import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "../../context/ThemeContext";

const ThemeToggleBtn = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      aria-label="Toggle Dark Mode"
      className={`toggle-button ${isDarkMode ? "dark" : ""}`}
      onClick={toggleTheme}
    >
      {isDarkMode ? (
        <MoonIcon className={`icon ${isDarkMode ? "dark" : ""}`} />
      ) : (
        <SunIcon className={`icon ${isDarkMode ? "dark" : ""}`} />
      )}
    </button>
  );
};

export default ThemeToggleBtn;

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "../../context/ThemeContext";

const ThemeToggleBtn = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      aria-label="Toggle Dark Mode"
      className="toggle-button"
      onClick={toggleTheme}
    >
      {isDarkMode ? (
        <MoonIcon className="icon" />
      ) : (
        <SunIcon className="icon" />
      )}
    </button>
  );
};

export default ThemeToggleBtn;

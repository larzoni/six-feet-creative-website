// ThemeToggleBtn.js
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "../../context/ThemeContext";

import styles from "@/components/ThemeToggleBtn/ThemeToggleBtn.module.scss";
import Button from "../Button/Button";

const ThemeToggleBtn = () => {
  const { toggleTheme, isDarkMode } = useTheme();

  const buttonClassName = `${isDarkMode ? styles.dark : ""} ${
    styles.toggleButton
  }`;

  const iconClassName = `${styles.icon} ${isDarkMode ? styles.dark : ""}`;

  return (
    <Button
      icon={isDarkMode ? MoonIcon : SunIcon}
      label="Toggle Dark Mode"
      onClick={toggleTheme}
      className={buttonClassName}
      logoClassName={iconClassName}
    />
  );
};

export default ThemeToggleBtn;

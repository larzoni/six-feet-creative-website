"use client";
import { useTheme } from "@/context/ThemeContext";
import styles from "./RegularButton.module.scss";

const RegularButton = ({ text, onClick, label }) => {
  const { isDarkMode } = useTheme();

  const buttonClassName = `${isDarkMode ? styles.dark : ""} ${styles.button} ${
    styles.shutter
  } `;

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onClick();
    }
  };

  return (
    <div tabIndex={0} onKeyDown={handleKeyPress}>
      <button
        type="submit"
        className={buttonClassName}
        aria-label={label}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default RegularButton;

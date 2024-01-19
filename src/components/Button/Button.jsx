// Button.js
import { useTheme } from "@/context/ThemeContext";
import styles from "@/components/Button/Button.module.scss";

const Button = ({
  onClick,
  icon: Icon,
  label,
  className: additionalClassName,
  logoClassName: logoClassName,
}) => {
  const { isDarkMode } = useTheme();

  const buttonClassName = `${isDarkMode ? styles.dark : ""} ${
    additionalClassName ?? styles.button
  }`;
  const iconClassName = `${logoClassName ?? styles.icon} ${
    isDarkMode ? styles.dark : ""
  }`;

  return (
    <button aria-label={label} onClick={onClick} className={buttonClassName}>
      <Icon className={iconClassName} />
    </button>
  );
};

export default Button;

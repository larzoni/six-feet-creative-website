import styles from "@/components/Footer/Footer.module.scss";
import { InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { useTheme } from "@/context/ThemeContext";

export const Footer = () => {
  const { isDarkMode } = useTheme();

  return (
    <footer className={`${styles.container} ${isDarkMode ? styles.dark : ""}`}>
      <a
        href="https://www.instagram.com/larzoni"
        target="_blank"
        rel="noopener noreferrer"
        className={`icon ${isDarkMode ? "dark" : ""}`}
      >
        <InstagramLogoIcon
          className={`${styles.icon} ${isDarkMode ? styles.dark : ""}`}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/helena-larsson-b29323250/"
        target="_blank"
        rel="noopener noreferrer"
        className={`icon ${isDarkMode ? "dark" : ""}`}
      >
        <LinkedInLogoIcon
          className={`${styles.icon} ${isDarkMode ? styles.dark : ""}`}
        />
      </a>
    </footer>
  );
};

import { useTheme } from "../../context/ThemeContext";
import styles from "@/components/HomepageLogo/HomepageLogo.module.scss";

const HomepageLogo = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={styles.wrapper}>
      <img
        className={styles.logo}
        src={isDarkMode ? "/logoOnDark.svg" : "/logoOnLight.svg"}
        alt="My SVG Icon"
      />
    </div>
  );
};

export default HomepageLogo;

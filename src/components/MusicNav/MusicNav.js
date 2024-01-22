"use client";
import { useTheme } from "@/context/ThemeContext";
import styles from "./MusicNav.module.scss";
import Link from "next/link";

const MusicNav = () => {
  const { isDarkMode } = useTheme();
  return (
    <div className={`${styles.linkContainer} ${isDarkMode ? styles.dark : ""}`}>
      <Link href="/music/pop">
        <span className={`${styles.link} ${isDarkMode ? styles.dark : ""}`}>
          POP MUSIC
        </span>
      </Link>
      <span className={styles.separator}>|</span>
      <Link href="/music/production">
        <span className={`${styles.link} ${isDarkMode ? styles.dark : ""}`}>
          PRODUCTION MUSIC
        </span>
      </Link>
    </div>
  );
};

export default MusicNav;

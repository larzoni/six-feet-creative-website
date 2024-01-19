"use client";

import { useTheme } from "@/context/ThemeContext";
import styles from "./layout.module.scss";

export default function PagesLayout({ children }) {
  const { isDarkMode } = useTheme();

  const layoutClassName = `${isDarkMode ? styles.dark : ""} ${
    styles.container
  }`;

  return <main className={layoutClassName}>{children}</main>;
}

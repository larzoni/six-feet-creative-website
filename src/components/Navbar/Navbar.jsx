"use client";

import React from "react";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import { NavToggleTheme } from "../NavToggleTheme/NavToggleTheme";

const Navbar = () => {
  const { isDarkMode } = useTheme();

  return (
    <nav className={`${styles.container} ${isDarkMode ? styles.dark : ""}`}>
      <NavToggleTheme />
      <Link href="/">
        <span className={`${styles.link} ${isDarkMode ? styles.dark : ""}`}>
          HOME
        </span>
      </Link>
      <Link href="/music">
        <span className={`${styles.link} ${isDarkMode ? styles.dark : ""}`}>
          MUSIC
        </span>
      </Link>
      <Link href="/about">
        <span className={`${styles.link} ${isDarkMode ? styles.dark : ""}`}>
          ABOUT ME
        </span>
      </Link>
      <Link href="/contact">
        <span className={`${styles.link} ${isDarkMode ? styles.dark : ""}`}>
          CONTACT
        </span>
      </Link>
    </nav>
  );
};

export default Navbar;

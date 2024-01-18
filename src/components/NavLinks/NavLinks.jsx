"use client";

import React from "react";
import styles from "@/components/NavLinks/NavLinks.module.scss";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import { Navbar } from "../Navbar/Navbar";

const NavLinks = () => {
  const { isDarkMode } = useTheme();

  return (
    <nav className={`${styles.container} ${isDarkMode ? styles.dark : ""}`}>
      <Navbar />
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

export default NavLinks;

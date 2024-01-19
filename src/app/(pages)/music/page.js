"use client";

import React from "react";
import styles from "./page.module.scss";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";

export default function Music() {
  const { isDarkMode } = useTheme();
  return (
    <main className={styles.container}>
      <section className={styles.content}>
        <div className={styles.linkContainer}>
          <Link href="/music/pop">
            <span className={`${styles.link} ${isDarkMode ? styles.dark : ""}`}>
              POP MUSIC
            </span>
          </Link>
          |
          <Link href="/music/production">
            <span className={`${styles.link} ${isDarkMode ? styles.dark : ""}`}>
              PRODUCTION MUSIC
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}

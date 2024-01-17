import React from "react";
import styles from "@/components/Navbar/Navbar.module.scss";
import { ThemeToggleBtn } from "../ThemeToggleBtn/ThemeToggleBtn";

export const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.buttonContainer}>
        <ThemeToggleBtn className={styles.button} />
      </div>
    </div>
  );
};

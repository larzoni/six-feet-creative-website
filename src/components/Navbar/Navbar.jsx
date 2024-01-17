import React from "react";
import ThemeToggleBtn from "../ThemeToggleBtn/ThemeToggleBtn";
import styles from "@/components/Navbar/Navbar.module.scss";

export const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.buttonContainer}>
        <ThemeToggleBtn className={styles.button} />
      </div>
    </div>
  );
};

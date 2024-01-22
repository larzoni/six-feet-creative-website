import React from "react";
import styles from "./NavToggleTheme.module.scss";
import ThemeToggleBtn from "../ThemeToggleBtn/ThemeToggleBtn";

export const NavToggleTheme = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.buttonContainer}>
        <ThemeToggleBtn className={styles.button} />
      </div>
    </div>
  );
};

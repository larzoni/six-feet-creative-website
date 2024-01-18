import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "@/components/Spotlight/Spotlight.module.scss";
import useMousePosition from "@/utils/useMousePosition";
import { useTheme } from "@/context/ThemeContext";

const Spotlight = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const isSmallScreen = window.innerWidth <= 600;
  const size = isHovered ? (isSmallScreen ? 300 : 375) : 0;

  const { isDarkMode } = useTheme();

  return (
    <div
      className={`${styles.main} ${isDarkMode ? styles.dark : styles.light}`}
    >
      <motion.div
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size * 1.6}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
        <p
          className={`${styles.paragraphMask} ${
            isDarkMode ? styles.dark : styles.light
          }`}
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          A songwriter and producer - with skills that haven't been replaced by
          AI (yet) - making good stuff if the paycheck is equally good.
        </p>
      </motion.div>
      <div className={styles.body}>
        <p
          className={`${styles.paragraph} ${
            isDarkMode ? styles.dark : styles.light
          }`}
        >
          Hello, My name is Helena.<br></br> I'm a <span>six feet</span> tall
          and <span> creative </span>creator - with passion for writing and
          producing both pop- and production music.
        </p>
      </div>
    </div>
  );
};

export default Spotlight;

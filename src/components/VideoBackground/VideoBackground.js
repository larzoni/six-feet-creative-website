"use client";
import { useTheme } from "../../context/ThemeContext";
import styles from "./VideoBackground.module.scss";

const VideoBackground = () => {
  const { isDarkMode } = useTheme();

  const overlayClassName = `${isDarkMode ? styles.dark : ""} ${styles.overlay}`;

  return (
    <section>
      <div className={overlayClassName}> </div>
      <video
        src={"/bgcover.mp4"}
        autoPlay
        loop
        controls={false}
        className={styles.video}
        muted
      />
    </section>
  );
};

export default VideoBackground;

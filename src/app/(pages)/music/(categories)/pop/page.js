import React from "react";
import styles from "./page.module.scss";

export default function Pop() {
  const iframeStyle = {
    borderRadius: "12px",
    height: "500px",
  };

  return (
    <div className={styles.container}>
      <iframe
        style={iframeStyle}
        src="https://open.spotify.com/embed/playlist/2YZTzOORTPQp14hVnk5BTm?utm_source=generator&theme=0"
        width="100%"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="eager"
      ></iframe>
    </div>
  );
}

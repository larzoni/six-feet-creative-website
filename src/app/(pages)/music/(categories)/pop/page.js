import React from "react";

export default function Pop() {
  const iframeStyle = {
    borderRadius: "12px",
    height: "400px",
  };

  return (
    <div>
      <div>
        <h1>Pop music</h1>
      </div>
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

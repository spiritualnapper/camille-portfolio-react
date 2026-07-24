import { useEffect, useRef } from "react";

function TenorGif({ postId, shareMethod = "host", aspectRatio, width = "100%" }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (window.Tenor?.reinit) {
      window.Tenor.reinit();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://tenor.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      ref={containerRef}
      className="tenor-gif-embed"
      data-postid={postId}
      data-share-method={shareMethod}
      data-aspect-ratio={aspectRatio}
      data-width={width}
    />
  );
}

export default TenorGif;

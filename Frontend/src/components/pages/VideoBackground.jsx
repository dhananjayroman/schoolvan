import React from "react";
import "../css/VideoBackground.css";

const VideoBackground = () => {
  return (
    <section className="video-section">
    <div className="video-container">
      <video className="background-video" autoPlay muted loop playsInline>
        <source src="/videos/istockvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Optional overlay for darker look */}
      <div className="video-overlay"></div>
    </div>
    </section>
  );
};

export default VideoBackground;


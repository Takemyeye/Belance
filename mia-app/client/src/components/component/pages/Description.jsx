import React from "react";

const Description = () => {
  
  const video = "video/video-bottom.mp4";

  
  return (
    <div className="description-container">
      <div className="description-background">
        <video 
          src={video}
          autoPlay
          loop
          muted
          playsInline
          preload="auto">
        </video>
        <div className="background"></div>
      </div>
    </div>
  );
};

export default Description;
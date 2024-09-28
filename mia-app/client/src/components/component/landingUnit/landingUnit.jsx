import React, { useContext, useMemo, useState } from "react";
import translations from "../../../utils/translations";
import ActiveContext from "../../ActiveContext";
import { useNavigate } from "react-router-dom";

const video = "video/landingVideo.mp4";

export function LandingUnit () {
  const { language } = useContext(ActiveContext);
  const translation = useMemo(() => translations[language], [language]);
  const [fadeOut, setFadeOut] = useState(false);
  const navigate = useNavigate();

  const handleStartClick = () => {
    setFadeOut(true);
    setTimeout(() => {
      navigate('/home');
    }, 1500);
  };

  return (
    <div className={`landing-main ${fadeOut ? 'fade-out' : ''}`}>
        <div className="landing-video">
          <video src={video} autoPlay loop muted playsInline></video>
          <div className="video-overlay"></div>
          <div className="video-overlay video-overlay--top"></div>
        </div>
        <div className="landing-start">
          <h1>Belance</h1>       
          <div className="landing-text"> {translation.innovatingSuccess} </div>
          <div className="start" onClick={handleStartClick}> {translation.getStarted} </div>
        </div>
      </div>
  )
}
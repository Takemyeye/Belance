import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Video404 } from "./404video";

export function Error404 () {
const [fadeOut, setFadeOut] = useState(false);
const navigate = useNavigate();

const handleStartClick = () => {
  setFadeOut(true);
  setTimeout(() => {
    navigate('/home');
  }, 1500); 
};

const landingText = [
  'Sorry, the page you are looking for could not be found. It might have been removed, had its name changed, or is temporarily unavailable.'
];

  return (
    <div className={`landing-main  ${fadeOut ? 'fade-out' : ''}`}>
      <Video404/>
      <div className="landing-start">
        <h1> 404 | Page Not Found </h1>
        <div className="landing-text"> {landingText[0]} </div>
        <div className="start" onClick={handleStartClick}> Go Home </div>
      </div>
    </div>
  )
}
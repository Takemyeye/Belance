import React, { useMemo, useContext } from "react";import { Link } from "react-router-dom";
import './styles/soon.scss'
import ActiveContext from '../../ActiveContext';
import translations from '../../../utils/translations';

const Soon = () => {
  const { language } = useContext(ActiveContext);
  const translation = useMemo(() => translations[language], [language]);

  const video = "video/landingVideo.mp4";

  return(
      <div className="soon">
        <div className="soon-text"> {translation.comingSoon} </div> 
        <div className="start-index">
          <Link to={'/home'}>
            <div className="start"> {translation.goHome} </div>
          </Link>
        </div>
        <video src={video} autoPlay loop muted playsInline></video>
        <div className="video-overlay"></div>
        <div className="video-overlay-top"></div>
      </div>
  )
}

export default Soon;
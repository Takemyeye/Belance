import React, { useState, useEffect, useRef, useMemo, useContext  } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCode, faInfo } from '@fortawesome/free-solid-svg-icons';
import ActiveContext from '../../ActiveContext';
import translations from '../../../utils/translations';

const Developers = () => {
  const [hoverInfoVisible, setHoverInfoVisible] = useState(false);
  const [hoverInfoLevelVisible, setHoverInfoLevelVisible] = useState(false);
  const { language } = useContext(ActiveContext);
  const translation = useMemo(() => translations[language], [language]);

  const developersBackgroundRef = useRef(null);

  const handleInfoClick = () => {
    setHoverInfoVisible(!hoverInfoVisible);
    if (hoverInfoLevelVisible) {
      setHoverInfoLevelVisible(false);
    }
  };

  const levelClick = () => {
    setHoverInfoLevelVisible(!hoverInfoLevelVisible);
  };

  const handleClickOutside = (event) => {
    if (developersBackgroundRef.current && !developersBackgroundRef.current.contains(event.target)) {
      setHoverInfoVisible(false);
      setHoverInfoLevelVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const developersData = [
    { name: 'Oleh Bratok', experience: 'Ex: 1 year', level: '5', portfolioLink: 'https://soulswap-portfolio.netlify.app/' },
  ];

  developersData.sort((a, b) => parseInt(b.level) - parseInt(a.level));

  const levelDescriptions = [
    { level: 1, text: translation.levelDescription1 },
    { level: 2, text: translation.levelDescription2 },
    { level: 3, text: translation.levelDescription3 },
    { level: 4, text: translation.levelDescription4 },
    { level: 5, text: translation.levelDescription5 }
  ];

  levelDescriptions.sort((a, b) => parseInt(b.level) - parseInt(a.level));

  const developersInfo = [
    { text: translation.developersInfo1 },
    { text: translation.developersInfo2 },
    { text: translation.developersInfo3 },
    { text: translation.developersInfo4 },
    { text: translation.developersInfo5 }
  ];

  return (
    <div className="developers-background" ref={developersBackgroundRef}>
      <div className={`hover-info ${hoverInfoVisible ? 'visible' : ''}`}>
        <div className="developers-information">
          <span> {translation.developersTitle} </span>
          {developersInfo.map((desc, index) => (
            <div className="classification" key={index}>
              {desc.text}
            </div>
          ))}
        </div>
      </div>
      <div className={`hover-info ${hoverInfoLevelVisible ? 'visible' : ''}`}>
        <div className="developers-information">
          <span> {translation.levelSystem} </span>
          {levelDescriptions.map(desc => (
            <div className="classification" key={desc.level}>
              <p className={`level level-${desc.level}`}>{desc.level}</p>
              {desc.text}
            </div>
          ))}
        </div>
      </div>
      <div className="developers">
        <div className="home-title">
          {translation.developersTitle}
          <div className="home-logo"></div>
          <div className="info" onClick={handleInfoClick}>
            <FontAwesomeIcon icon={faInfo} />
          </div>
        </div>
        <div className="developers-container">
          {developersData.map((developer, index) => (
            <div className="developer" key={index}>
              <div className="avatar"> <FontAwesomeIcon icon={faUser} /> </div>
              <h2> {developer.name} </h2>
              <div className="workExperience"> {developer.experience} </div>
              <Link to={developer.portfolioLink} className="works">
                {translation.portfolio} <FontAwesomeIcon icon={faCode} />
              </Link>
              <div className={`level level-${developer.level}`} onClick={levelClick}>lvl {developer.level}</div>
            </div>
          ))}
        </div>
        <Link to="/team">
          <div className="more">{translation.moreButtonText}</div> 
        </Link>
      </div>
    </div>
  );
};

export default Developers;
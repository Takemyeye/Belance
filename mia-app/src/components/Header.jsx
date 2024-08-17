import React, { useState, useMemo, useContext, useRef, useEffect } from "react";
import { faArrowLeft, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RightContainer } from "./component/rightContainerHeader";
import { LanguageBlock } from "./component/languageBlock/languageBlock";
import { NavBar } from "./component/header/navBar";
import { Link} from "react-router-dom";
import ActiveContext from "./ActiveContext";
import translations from "../utils/translations";
import "./styles/Header.scss";


const Header = ({ hideNavigation, noJustify, hideBars }) => {
  const [navigationVisible, setNavigationVisible] = useState(false);
 const [languageMenuVisible, setLanguageMenuVisible] = useState(false);
 const { language } = useContext(ActiveContext); 

 //Ref Memo
 const translation = useMemo(() => translations[language], [language]);
 const languageMenuRef = useRef(null);

 //Function
 const toggleBars = () => {
   setNavigationVisible(!navigationVisible);
 };

 useEffect(() => {
   const handleResize = () => {
     if (window.innerWidth <= 768) {
       setNavigationVisible(false);
     } else {
       setNavigationVisible(!hideNavigation);
     }
   };

   handleResize();

   window.addEventListener("resize", handleResize);

   return () => window.removeEventListener("resize", handleResize);
 }, [hideNavigation]);

 useEffect(() => {
   const handleClickOutside = (event) => {
     if (languageMenuRef.current && !languageMenuRef.current.contains(event.target)) {
       setLanguageMenuVisible(false);
     }
   };

   document.addEventListener('mousedown', handleClickOutside);
   return () => document.removeEventListener('mousedown', handleClickOutside);
 }, []);

  return (
    <header>
      <div className={`container ${noJustify ? 'no-justify-space-evenly' : ''}`}>
          <div className="logo-title">
            <Link to="/home">
              <div className="logo"></div>
            </Link>
            {!hideBars && (
              <div className="menu" onClick={toggleBars}>
                <FontAwesomeIcon icon={faBars} />
              </div>
            )}
          </div>
          {!hideNavigation && (
            <div className="navigation" style={{ display: navigationVisible ? 'flex' : 'none' }}>
              <div className="back" onClick={toggleBars}>
                <FontAwesomeIcon icon={faArrowLeft} />
                {translation.back}
              </div>
              <NavBar/>
              <div className="left-container" onClick={() => setLanguageMenuVisible(!languageMenuVisible)}> 
                {translation.language} 
              </div>
            </div>
          )}
        </div>
        <div className={`changeLanguage ${languageMenuVisible ? 'show' : ''}`} ref={languageMenuRef}>
          <div className="language-container">
            <span onClick={() => setLanguageMenuVisible(false)}>
              <FontAwesomeIcon icon={faXmark} /> 
              {translation.language}
            </span>
            <LanguageBlock/>
          </div>
        </div>
      <RightContainer/>
    </header>
  );
};

export default Header;
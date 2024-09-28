import React, { useState, useEffect, useMemo, useContext } from "react";
import { Link } from "react-router-dom";
import ActiveContext from '../../ActiveContext';
import translations from '../../../utils/translations';

const RightPanelBottom = () => {
  const { language } = useContext(ActiveContext);
  const translation = useMemo(() => translations[language], [language]);
  

  const images = useMemo(
    () => [
      'img/SS-Portfolio.png',
      'img/impactium.jpg',
      'img/Sushi-Italia.jpg',
      'img/compress.png',
      'img/DolceVita.png',
      'img/portfolio-vue.png'
    ],
    []
  );

  const storedIndex = localStorage.getItem("currentImageIndex");
  const initialIndex = storedIndex ? Math.min(parseInt(storedIndex, 10), images.length - 1) : 0;

  const [currentImageIndex, setCurrentImageIndex] = useState(initialIndex);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  useEffect(() => {
    localStorage.setItem("currentImageIndex", currentImageIndex.toString());
  }, [currentImageIndex]);

  return (
    <div className="works-scroll-background">
      <div className="works-scroll">
        <div className="img">
          <img
            src={images[currentImageIndex]}
            alt={`inter Pointer`}
            style={{
              objectFit: "contain",
              width: "100%",
              height: "100%",
            }}
          />
        </div>
        <div className="img-overlay">
          <div className="home-title"> 
            {translation.wirked}
            <div className="home-logo"></div>
          </div>
          <Link to={'/works'}>
            <div className="more"> {translation.moreButtonText} </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RightPanelBottom;
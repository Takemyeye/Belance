import React, { useMemo, useContext } from 'react';
import ActiveContext from '../../ActiveContext';
import translations from '../../../utils/translations';

const img = [
  'img/angular.png',
  'img/react.png',
  'img/php.png',
  'img/node.png',
  'img/next.png'
];

const languageDevelopment = [   
  'Angular Development',
  'React Development',
  'PHP Development',
  'Node.js Development',
  'Next.js Applications'
];

export function BelanceUnitLeft () {
  const { language } = useContext(ActiveContext);
  const translation = useMemo(() => translations[language], [language]);

  return (
    <div className="belance-container">
    <div className="home-title">
      {translation.companyName}
      <div className="home-logo"></div>
    </div>
    <div className="information">
      <div className="about">
        <h1>{translation.whyBelanceTitle}</h1>
        {translation.aboutText}
        <div className="services">
          {translation.servicesTitle}
          <div className="skills-container">
            {img.map((src, index) => (
              <div className="skills" key={index}>
                <div className="ui">
                  <img
                    src={src}
                    alt={`img ${index}`}
                    style={{
                      objectFit: 'cover',
                      width: '100%',
                      height: '100%'
                    }}
                  />
                </div>
                <h3>{languageDevelopment[index]}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
import React, { useMemo, useContext } from 'react';
import { Link } from 'react-router-dom';
import ActiveContext from '../../ActiveContext';
import translations from '../../../utils/translations';

export function BelanceUnitRight () {
  const { language } = useContext(ActiveContext);
  const translation = useMemo(() => translations[language], [language]);

  return (
    <div className="belance-container">
    <div className="home-title">
      {translation.aboutTitle}
      <div className="home-logo"></div>
    </div>
    <div className="information">
      <div className="about">
        <h1>{translation.companyTitle}</h1>
        <h3>{translation.companyDescription}</h3>
        <h1>{translation.whyBelanceTitle}</h1>
        <h3>{translation.whyBelanceText}</h3>
        <Link to={'/about'}>
          <div className="more">{translation.moreButtonText}</div>
        </Link>
      </div>
    </div>
  </div>
  )
}
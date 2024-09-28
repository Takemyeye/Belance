import React,{ useMemo, useContext}from "react";
import ActiveContext from "../../../ActiveContext";
import translations from "../../../../utils/translations";


const LeftPanel = () => {

const { language } = useContext(ActiveContext);

const translation = useMemo(() => translations[language], [language]);

  return (
    <div className="container-left">
      <div className="about-text-container">
        <h1> {translation.aboutUsTitle} </h1>
        <h3> {translation.aboutUsDescription} </h3>
      </div>
      <div className="about-text-container">
        <h1> {translation.ourHistoryTitle} </h1>
        <h3> {translation.ourHistoryText} </h3>
      </div>
    </div>
  );
}

export default LeftPanel;
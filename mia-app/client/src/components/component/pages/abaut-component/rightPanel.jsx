import React, { useMemo, useContext}from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import ActiveContext from "../../../ActiveContext";
import translations from "../../../../utils/translations";

const RightPanel = () => {

const { language } = useContext(ActiveContext);

const translation = useMemo(() => translations[language], [language]);

  return(
    <div className="container-right">
      <div className="about-text-container">
        <h1>{translation.ourValuesTitle}</h1>
        <div className="values-container">
          <FontAwesomeIcon icon={faCheck} />
          <div className="text-container">
            <h3>{translation.ourValuesCommitment}</h3>
            <h3>{translation.ourValuesCommitmentText}</h3>
          </div>
        </div>
        <div className="values-container">
          <FontAwesomeIcon icon={faCheck} />
          <div className="text-container">
            <h3>{translation.ourValuesCollaboration}</h3>
            <h3>{translation.ourValuesCollaborationText}</h3>
          </div>
        </div>
        <div className="values-container">
          <FontAwesomeIcon icon={faCheck} />
          <div className="text-container">
            <h3>{translation.ourValuesInnovation}</h3>
            <h3>{translation.ourValuesInnovationText}</h3>
          </div>
        </div>
      </div>
      <div className="about-text-container">
        <h1>{translation.ourMissionTitle}</h1>
        <h3>{translation.ourMissionText}</h3>
      </div>
    </div>
  )
}

export default RightPanel;
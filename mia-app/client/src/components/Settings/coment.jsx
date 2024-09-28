import React, { useContext, useMemo } from "react";
import ActiveContext from "../ActiveContext";
import translations from "../../utils/translations";

const Coment = () => {
  const { language } = useContext(ActiveContext);
  const translation = useMemo(() => translations[language], [language]);
  return (
    <div className="profile-container">
      <div className="profile-title">
        <h1>{translation.leaveReview}</h1>
        <h3>{translation.feedbackImportant}</h3>
      </div>
      <div className="coment-container">
        <h3>{translation.review}</h3>
        <textarea className="textarea"  placeholder={translation.shareThoughts}></textarea>
      </div>
      <button className="submit-button">
        {translation.submitReview}
      </button>
    </div>
  )
}

export default Coment;
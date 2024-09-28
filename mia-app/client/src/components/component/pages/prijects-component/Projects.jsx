import React, { useMemo, useContext } from "react";
import { ProjectContainer } from "./ProjectsUnit";
import ActiveContext from "../../../ActiveContext";
import translations from "../../../../utils/translations";
import '../styles/projects.scss';


const Proud = () => {
  const { language } = useContext(ActiveContext);

  const translation = useMemo(() => translations[language], [language]);

  return (
    <div className="proud-container">
      <div className="title-container">
        <h5>{translation.ourWorks}</h5>
        <h1>{translation.ourProjectsTitle}</h1>
        <h3>{translation.projectsDescription1}</h3>
        <h3>{translation.projectsDescription2}</h3>
      </div>
      <ProjectContainer/>
    </div>
  )
}

export default Proud;
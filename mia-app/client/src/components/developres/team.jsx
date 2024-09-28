import React, { useContext, useMemo} from "react"
import { TeamUnit } from "../../ui/teamUnit"
import ActiveContext from "../ActiveContext"
import translations from "../../utils/translations"
import "./styles/team.scss"

const Team = () => {
  const { language } = useContext(ActiveContext);
  const translation = useMemo(() => translations[language], [language]);

  return (

    <div className="team">
      <div className="title-container">
        <h5>{translation.ourTeam}</h5>
        <h1>{translation.meetOurTeam}</h1>
        <h3>{translation.teamDescription}</h3>
      </div>
      <div className="team-container"> 
        <TeamUnit
          name="Oleh Bratok"
          possition="Frontend Developer"
          description={translation.frontEnd}
          />
      </div>
    </div>
  )
}

export default Team;
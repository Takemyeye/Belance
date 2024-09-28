import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export function SocialUnit ({link, text, icon}) {
  return (
    <Link to={link}>
    <div className="container">
      <FontAwesomeIcon icon={icon}/>
      <h3>{text}</h3>
    </div>
  </Link>
  )
}
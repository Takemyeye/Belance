import { Link } from "react-router-dom";

export function HeaderLink ({ link, text }) {
  return (
    <Link to={link}>
      <div className="left-container"> {text} </div>
    </Link>    
  )
}
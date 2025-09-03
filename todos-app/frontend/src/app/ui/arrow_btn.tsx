import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './styles/arrowBtn.css';

export default function ArrowButtonUi() {

  return(
    <button className="arroow_btn">
      <FontAwesomeIcon 
        icon={faArrowRight} 
        size="2x" 
        color="#060b0b" 
        style={{ width: "24px", height: "24px" }} 
      />
    </button>
  )
}
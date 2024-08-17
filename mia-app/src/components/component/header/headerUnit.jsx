import React from "react";
import { faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight} from "@fortawesome/free-solid-svg-icons";
import { SocialUnit } from "../social/socialUnit";

export function Navigation({ text, isOpen, onClick }) {
  
  return (
    <div className={`left-container-dropBar ${isOpen ? 'active' : ''}`} onClick={onClick}>
      {text}
      <p><FontAwesomeIcon icon={faArrowRight} /></p>
      {isOpen && (
        <div className="dropBar">
          <SocialUnit
          icon={faInstagram}
          text="instagram"
          link="https://www.instagram.com/takemyeyegit/"
          />
          <SocialUnit
          icon={faTelegram}
          text="telegram"
          link="https://t.me/+_A-d1T6L8a02NzU0"
          />
        </div>
      )}
    </div>
  );
}

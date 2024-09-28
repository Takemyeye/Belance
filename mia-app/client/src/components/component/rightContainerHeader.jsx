import React, { useContext, useState, useRef } from "react";
import { useFetchUser } from '../../fetch/useFetchUser';  
import { ProfileSettings } from "./profileSettings";
import { Link } from "react-router-dom";
import ActiveContext from "../ActiveContext";
import translations from "../../utils/translations";

export function RightContainer() {
  const { language, user, setUser } = useContext(ActiveContext);
  const [isPanelVisible, setIsPanelVisible] = useState(false);
  const userPanelRef = useRef(null);

  const translation = translations[language];

  useFetchUser(setUser, user);

  const toggleDisplay = () => {
    setIsPanelVisible((prevVisible) => !prevVisible);
    if (userPanelRef.current) {
      userPanelRef.current.style.display = isPanelVisible ? 'none' : 'flex';
    }
  };

  return (
    <div className="right-container">
      {user ? (
        <div className="user-info">
          <img
            onClick={toggleDisplay}
            src={user.avatar || "/default-avatar.png"}
            alt="User Avatar"
            className="user-avatar"
          />
          <div className="user-panel" ref={userPanelRef}>
            <div className="user-info">
              <img
                src={user.avatar || "/default-avatar.png"}
                alt="User Avatar"
                className="user-avatar"
              />
              <h3>{user.username}</h3>
            </div>
            <ProfileSettings />
          </div>
        </div>
      ) : (
        <Link to='/register'>
          <div className="sign">
            {translation.sign}
          </div>
        </Link>
      )}
    </div>
  );
}

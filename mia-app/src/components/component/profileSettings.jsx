import React, { useContext} from "react";
import ActiveContext from "../../components/ActiveContext";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGear, faRightFromBracket, faUser } from "@fortawesome/free-solid-svg-icons";

export function ProfileSettings () {
  const { logout } = useContext(ActiveContext); 
  const navigate = useNavigate(); 

  const handleLogout = () => {
    logout(); 
    navigate('/home'); 
  };

  return (
    <>
    <div className="user-container">
      <Link to="/profile">
        <span> <FontAwesomeIcon icon={faUser} /> Profile</span>
      </Link>
      <Link to="/profile">
        <span> <FontAwesomeIcon icon={faGear} /> Settings </span>
      </Link>
      <span onClick={handleLogout}> <FontAwesomeIcon icon={faRightFromBracket} /> Logout </span>
    </div>
    </>
  )
}
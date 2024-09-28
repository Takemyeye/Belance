import React, { useState, useEffect, useContext, useMemo } from "react";
import { Notifications } from "./notifications";
import ActiveContext from "../ActiveContext";
import translations from "../../utils/translations";

const NotificationBlock = () => {
  const { language } = useContext(ActiveContext);
  const translation = useMemo(() => translations[language], [language]);

  const [switchStates, setSwitchStates] = useState(() => {
    const savedStates = localStorage.getItem('switchStates');
    return savedStates ? JSON.parse(savedStates) : {};
  });

  useEffect(() => {
    localStorage.setItem('switchStates', JSON.stringify(switchStates));
  }, [switchStates]);

  const handleToggle = (title) => {
    setSwitchStates(prevStates => ({
      ...prevStates,
      [title]: !prevStates[title]
    }));
  };

  return (
    <div className="profile-container">
      <div className="profile-title">
        <h1>{translation.notifications}</h1>
        <h3>{translation.manage}</h3>
      </div>
      <div className="notification-container">
        <Notifications
          title={translation.notification1}
          notifications={translation.settingNotification1}
          isChecked={!!switchStates[translation.notification1]}
          onToggle={handleToggle}
        />
        <Notifications
          title={translation.notification2}
          notifications={translation.settingNotification2}
          isChecked={!!switchStates[translation.notification2]}
          onToggle={handleToggle}
        />
      </div>
    </div>
  );
}

export default NotificationBlock;

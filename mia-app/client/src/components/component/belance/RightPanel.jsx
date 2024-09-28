import React from "react";
import RightPanelBottom from '../pages/Works_Scroll';
import Developers from '../pages/Developers';

const RightPanel = () => {

  return (
    <div className="rightPanel">
      <Developers/>
      <RightPanelBottom/>
    </div>
  );
};

export default RightPanel;
import React from "react";
import Belance from './pages/Belance';
import Description from './pages/Description';

const LeftPanel = () => {

  return (
   <div className="leftPanel">
    <Belance/>
    <Description/>
   </div>
  );
};

export default LeftPanel;
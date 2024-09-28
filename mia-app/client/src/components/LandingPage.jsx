import React from "react";
import Header from './Header';
import { LandingUnit } from "./component/landingUnit/landingUnit";
import './styles/Landing.scss';

const Landing = () => {
  
  return (
    <>
      <Header
        hideNavigation={true}
        noJustify={true}
        hideBars={true}
        />
      <LandingUnit/>
    </>
  );
};

export default Landing;
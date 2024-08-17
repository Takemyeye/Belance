import React from "react";
import { AboutContainer } from "./abaut-component/aboutContainer";
import Header from "../../Header";
import Footer from "../footer";
import './styles/about.scss';

const About = () => {

  return(
    <>
      <Header/>
      <AboutContainer/>
      <Footer/>
    </>
  )
}

export default About;
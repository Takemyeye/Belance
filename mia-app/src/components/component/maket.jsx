import React from 'react';
import { MaketContainer } from "./maket/maketContainer";
import Header from "../Header";
import Footer from "./footer";
import "../styles/maket.scss";

const Maket = () => {

  return (
    <>
      <Header/>
      <MaketContainer/>
      <Footer/>
    </>
  )
}

export default Maket;
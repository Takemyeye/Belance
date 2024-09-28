import React from "react";
import Container from './Container'
import Header from "./Header";
import Footer from "./footer/footer";
import './styles/Home.scss';

const Home = () => {
  return (
    <>
      <Header />
      <Container />
      <Footer/>
    </>
  );
};

export default Home;
import React from "react";
import Header from "./Header";
import { Error404 } from "./notFound/notFound";
import './styles/Landing.scss';

const NotFound = () => {

  return (
    <>
      <Header />
      <Error404/>
    </>
  );
};

export default NotFound;

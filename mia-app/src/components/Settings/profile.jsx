import React from "react";
import "./styles/profile.scss";
import Header from "../Header";
import ProfileData from "./profileData";
import NotificationBlock from "./notificationBlock";
import Coment from "./coment";
import Footer from "../footer/footer";

export function Profile() {
  return (
    <>
      <Header />
      <div className="wrapper">
        <ProfileData/>
        <NotificationBlock/>
        <Coment/>
      </div>
      <Footer/>
    </>
  );
}

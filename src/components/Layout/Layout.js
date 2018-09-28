import React, { Component } from "react";
import Header from "./Header/Header";
import SideBar from "./SideBar/SideBar";
import MainContent from "./MainContent/MainContent";
import Footer from "./Footer/Footer";

const Layout = props => {
  return (
    <React.Fragment>
      <Header />

      <div className="d-flex flex-row">
        <SideBar />
        <MainContent>{props.children}</MainContent>
      </div>

      <Footer />
    </React.Fragment>
  );
};
export default Layout;

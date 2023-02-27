import React, { Fragment } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <Fragment>
      <div className="container-page">
        <Sidebar></Sidebar>
        <div className="main">
          <div className="main-container">
            <Header></Header>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Main;

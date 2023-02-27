import React, { Fragment } from "react";
import Header from "./components/Layout/Header";
import Dashboard from "./components/pages/Dashboard";
import Sidebar from "./components/Layout/Sidebar";
import { useNavigate, NavLink, Route, Routes } from "react-router-dom";
import Main from "./components/Layout/Main";
import Customers from "./components/pages/Customers";
import Orders from "./components/pages/Orders";
import OrderDetailPage from "./components/pages/OrderDetailPage";
import Statistics from "./components/pages/Statistics";

const App = () => {
  return (
    <Fragment>
      {/* <div className="container-page">
        <Sidebar></Sidebar>
        <div className="main">
          <div className="main-container">
            <Header></Header>
            <div className="content">
              <Dashboard></Dashboard>
            </div>
          </div>
        </div>
      </div> */}
      <Routes>
        <Route path="/" element={<Main></Main>}>
          <Route
            path="/"
            element={
              <div className="content">
                <Dashboard></Dashboard>
              </div>
            }
          ></Route>
          <Route
            path="/customers"
            element={
              <div className="content">
                <Customers></Customers>
              </div>
            }
          ></Route>
          <Route
            path="/orders"
            element={
              <div className="content">
                <Orders></Orders>
              </div>
            }
          ></Route>
          <Route
            path="/orders/:orderID"
            element={
              <Fragment>
                <OrderDetailPage></OrderDetailPage>
              </Fragment>
            }
          ></Route>
          <Route
            path="/products"
            element={
              <div className="content">
                <Customers></Customers>
              </div>
            }
          ></Route>
          <Route
            path="/statistics"
            element={
              <div className="content">
                <Statistics></Statistics>
              </div>
            }
          ></Route>
        </Route>
      </Routes>
    </Fragment>
  );
};

export default App;

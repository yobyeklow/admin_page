import React, { Fragment } from "react";
import Dashboard from "./components/pages/Dashboard";
import Main from "./components/Layout/Main";

import CustomerPage from "./components/pages/Customers/CustomerPage";
import CustomerDetailsPage from "./components/pages/Customers/CustomerDetailsPage";
import Orders from "./components/pages/Orders/Orders";
import OrderDetailPage from "./components/pages/Orders/OrderDetailPage";
import Statistics from "./components/pages/Statistic/Statistics";
import ProductPage from "./components/pages/Product/ProductPage";
import AddProductPage from "./components/pages/Product/AddProductPage";
import ProductDetailPage from "./components/pages/Product/ProductDetailPage";
import { Route, Routes } from "react-router-dom";
import Login from "./components/pages/User/Login";

const App = () => {
  return (
    <Fragment>
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
                <CustomerPage></CustomerPage>
              </div>
            }
          ></Route>
          <Route
            path="/customer/:id"
            element={
              <div className="content">
                <CustomerDetailsPage></CustomerDetailsPage>
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
                <ProductPage></ProductPage>
              </div>
            }
          ></Route>
          <Route
            path="/product/:productID"
            element={
              <Fragment>
                <ProductDetailPage></ProductDetailPage>
              </Fragment>
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
          <Route
            path="/products/addProduct"
            element={
              <div className="content">
                <AddProductPage></AddProductPage>
              </div>
            }
          ></Route>
          <Route
            path="/login"
            element={
              <div className="content">
                <Login></Login>
              </div>
            }
          ></Route>
        </Route>
      </Routes>
    </Fragment>
  );
};

export default App;

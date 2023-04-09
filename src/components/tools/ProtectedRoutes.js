import React from "react";
import { Navigate, Outlet, Route, useLocation } from "react-router-dom";

const ProtectedRoutes = () => {
  const auth = localStorage.getItem("accessToken");
  return auth ? <Outlet></Outlet> : <Navigate to="/admin/login"></Navigate>;
};

export default ProtectedRoutes;

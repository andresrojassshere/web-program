import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function PrivateRoute({ element }) {
  const { isLogged } = useAuth();

  return isLogged ? element : <Navigate to="/login" />;
}

export default PrivateRoute;

import React from "react";
import { Navigate, Route } from "react-router-dom";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProtectedRoute({ component: Component, ...restOfProps }) {
  const isauthenticated = sessionStorage.getItem("user");

  if (!isauthenticated) {
    toast.info("Please Log in");
  }

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isauthenticated ? <element {...props} /> : <Navigate to="/signin" />
      }
    />
  );
}

export default ProtectedRoute;

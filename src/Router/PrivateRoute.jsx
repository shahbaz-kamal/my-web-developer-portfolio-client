import React from "react";
import UseAuth from "../Hooks/UseAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = UseAuth();
  if (loading) {
    return <p>Loading......</p>;
  }
  if (user && user?.email === "shahbazkamal384@gmail.com") {
    return children;
  }
};

export default PrivateRoute;

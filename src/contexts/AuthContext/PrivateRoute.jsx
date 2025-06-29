import React from "react";
import { Navigate, useLocation } from "react-router";
import Loading from "../../pages/Loading/Loading";
import useAuth from "../../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <Loading />;
  }

  if (user && user.email) {
    return children;
  }
  return <Navigate state={location.pathname} to="/auth?mode=login" />;
};

export default PrivateRoute;

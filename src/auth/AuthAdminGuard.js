import PropTypes from "prop-types";
import { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
// components
import LoadingScreen from "../components/loading-screen";
//
import Login from "../pages/auth/LoginPage";
import { useAuthContext } from "./useAuthContext";

// ----------------------------------------------------------------------

AuthAdminGuard.propTypes = {
  children: PropTypes.node,
};

export default function AuthAdminGuard({ children }) {
  const { isAuthenticated, isInitialized } = useAuthContext();

  const { pathname } = useLocation();

  const [requestedLocation, setRequestedLocation] = useState(null);

  // alert(pathname);
  // /dashboard/overview
  // if (!isInitialized) {
  //   return <LoadingScreen />;
  // }


  // if (requestedLocation && pathname !== requestedLocation) {
  //   setRequestedLocation(null);
  //   return <Navigate to={requestedLocation} />;
  // }

  if (!localStorage.getItem("isAuthenticated")) {
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname);
    }
    return <Login />;
  }


  if (
    localStorage.getItem("isAuthenticated")
    &&
    localStorage.getItem("accessToken")
  ) {
    return <>{children}</>;
  }

  // if (
  //   localStorage.getItem("role") !== "Owner" &&
  //   localStorage.getItem("role") !== "RegionalManager"
  // ) {

  //   return <Login />;
  // }

  // if (
  //   localStorage.getItem("role") === "Owner" ||
  //   localStorage.getItem("role") === "RegionalManager"
  // ) {
  //   return <>{children}</>;
  // } else {
  //   return <Login />;
  // }

  /*if (
    localStorage.getItem("role") === "Owner" ||
    localStorage.getItem("role") === "RegionalManager"
  ) {
    return <>{children}</>;
  }*/

  return <>{children}</>;
}

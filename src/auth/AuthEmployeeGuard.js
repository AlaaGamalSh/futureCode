import PropTypes from "prop-types";
import { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
// components
import LoadingScreen from "../components/loading-screen";
//
import Login from "../pages/auth/LoginPage";
import { useAuthContext } from "./useAuthContext";

// ----------------------------------------------------------------------

AuthEmployeeGuard.propTypes = {
  children: PropTypes.node,
};

export default function AuthEmployeeGuard({ children }) {
  const { isAuthenticated, isInitialized } = useAuthContext();

  const { pathname } = useLocation();

  const [requestedLocation, setRequestedLocation] = useState(null);

  if (!localStorage.getItem("isAuthenticated")) {
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname);
    }
    return <Login />;
  }

  if (
    localStorage.getItem("role") !== "Owner" &&
    localStorage.getItem("role") !== "RegionalManager" &&
    localStorage.getItem("role") !== "BranchManager" &&
    localStorage.getItem("role") !== "Cashier"
  ) {
    return <Login />;
  }

  if (
    localStorage.getItem("role") === "Owner" ||
    localStorage.getItem("role") === "RegionalManager" ||
    localStorage.getItem("role") === "BranchManager" ||
    localStorage.getItem("role") === "Cashier"
  ) {
    return <>{children}</>;
  } else {
    alert("ماعندك صلاحية طلاع بلا قلة ادب");
    return <Login />;
  }

  //return <>{children}</>;
}

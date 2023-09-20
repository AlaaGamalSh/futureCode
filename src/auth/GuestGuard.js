import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
// routes
import { PATH_DASHBOARD } from "../routes/paths";
// components
import LoadingScreen from "../components/loading-screen";
//
import { useAuthContext } from "./useAuthContext";
import { useEffect } from "react";

// ----------------------------------------------------------------------

GuestGuard.propTypes = {
  children: PropTypes.node,
};

export default function GuestGuard({ children }) {
  const { isAuthenticated, isInitialized } = useAuthContext();

  useEffect(() => {
    //alert(isAuthenticated);
  });
  if (isAuthenticated) {
    return <Navigate to="home" />;
  }

  if (!isInitialized) {
    return <LoadingScreen />;
  }

  return <>{children}</>;
}

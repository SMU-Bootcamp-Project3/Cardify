import { Navigate } from "react-router-dom";
import Auth from "../utils/auth";

export const ProtectedRoute = ({ children }) => {

  if (!Auth.loggedIn()) {
    // user is not authenticated
    return <Navigate to="/" />;
  }
  return children;
};
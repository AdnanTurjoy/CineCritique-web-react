import React from "react";
import { Navigate } from "react-router-dom";
function ProtectedRoute({ userToken, children }) {
  if (!userToken) {
    return <Navigate to="/signin" replace />;
  }
  return children;
}
export default ProtectedRoute;

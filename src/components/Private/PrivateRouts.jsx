import React, { useContext } from "react";
import { AuthContext } from "../contexts/contexts";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Spinner from "../modals/spinner";

const PrivateRouts = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Spinner />;
  }
  if (user) {
    return children;
  }

  return (
    <>
      <Navigate state={location.state} to={"/auth/login"}></Navigate>
    </>
  );
};

export default PrivateRouts;

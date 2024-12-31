import React, { useContext } from "react";
import { AuthContext } from "../contexts/contexts";
import { Navigate, useNavigate } from "react-router-dom";
import Spinner from "../modals/spinner";

const PrivateRouts = ({ children }) => {
  const navigate = useNavigate();
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <Spinner />;
  }
  if (user) {
    return children;
  }

  return (
    <>
      <Navigate to={"/auth/login"}></Navigate>
    </>
  );
};

export default PrivateRouts;

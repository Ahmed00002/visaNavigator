import { AuthContext } from "../contexts/contexts";

const AuthProvider = (props) => {
  const { children } = props || {};
  return (
    <>{<AuthContext.Provider value={"hi"}>{children}</AuthContext.Provider>}</>
  );
};

export default AuthProvider;

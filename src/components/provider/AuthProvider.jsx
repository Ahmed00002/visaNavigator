import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { AuthContext } from "../contexts/contexts";
import auth from "../firebase/firebase_init";
import { useEffect, useState } from "react";

const AuthProvider = (props) => {
  const { children } = props || {};
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const signupWithEmailAndPass = (email, pass) => {
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  const signinWithEmailAndPass = (email, pass) => {
    return signInWithEmailAndPassword(auth, email, pass);
  };

  // logout user from account
  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
      return () => {
        unsubscribe();
      };
    });
  }, []);

  return (
    <>
      {
        <AuthContext.Provider
          value={{
            signupWithEmailAndPass,
            signinWithEmailAndPass,
            logout,
            updateUserProfile,
            user,
            loading,
          }}
        >
          {children}
        </AuthContext.Provider>
      }
    </>
  );
};

export default AuthProvider;

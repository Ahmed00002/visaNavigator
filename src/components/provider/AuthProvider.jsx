import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { AuthContext } from "../contexts/contexts";
import auth from "../firebase/Firebase.config";
import { useEffect, useState } from "react";

const AuthProvider = (props) => {
  const [darkMode, setDarkMode] = useState(false);

  const handleMode = () => {
    setDarkMode(!darkMode);
  };
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

  // google login
  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  // reset pass
  const resetPass = (email) => {
    return sendPasswordResetEmail(auth, email);
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
            resetPass,
            updateUserProfile,
            googleLogin,
            user,
            loading,
            handleMode,
            darkMode,
          }}
        >
          {children}
        </AuthContext.Provider>
      }
    </>
  );
};

export default AuthProvider;

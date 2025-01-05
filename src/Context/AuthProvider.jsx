import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";

import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.init";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //*   Google sign IN
  const googleProvider = new GoogleAuthProvider();

  const googleSignInUsers = () => {
    setLoading(false);
    return signInWithPopup(auth, googleProvider);
  };
  const text = "hello";
 //   *sign out/ log out

 const logoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };
  //   *On auth state change

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      if (currentUser) {
        setLoading(false);
        setUser(currentUser);
      } else {
        setLoading(false);
        setUser(null);
      }
      return () => {
        unsubscribe();
      };
    });
  }, []);

  const authInfo = {
    user,
    loading,
    setUser,
    setLoading,
    googleSignInUsers,
    text,logoutUser
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

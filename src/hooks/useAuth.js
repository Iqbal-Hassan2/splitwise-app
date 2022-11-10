import React, { useState, useEffect, useContext, createContext } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
  confirmPasswordReset,
} from "firebase/auth";
import { db } from "../firebase/firebase";

const authContext = createContext();
//
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
//
export const useAuth = () => {
  return useContext(authContext);
};
//
function useProvideAuth() {
  const [user, setUser] = useState(null);

  const auth = getAuth(db);

  const signIn = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password).then(
      (response) => {
        setUser(response.user);
        return response.user;
      }
    );
  };
  const signUp = async (firstName, lastName, email, password) => {
    return createUserWithEmailAndPassword(
      auth,
      firstName,
      lastName,
      email,
      password
    ).then((response) => {
      setUser(response.user);
      console.log(response);
      return response.user;
    });
  };
  const signout = async () => {
    return signOut().then(() => {
      setUser(false);
    });
  };
  const forgotPasswordEmail = async (email) => {
    return sendPasswordResetEmail(auth, email).then(() => {
      return true;
    });
  };
  const confirmPasswordR = async (code, password) => {
    return confirmPasswordReset(auth, code, password).then(() => {
      return true;
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });
    return () => unsubscribe();
    // eslint-disable-next-line
  }, []);

  //
  return {
    user,
    signIn,
    signUp,
    signout,
    forgotPasswordEmail,
    confirmPasswordR,
  };
}

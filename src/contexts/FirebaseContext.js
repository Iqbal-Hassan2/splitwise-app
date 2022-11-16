/* eslint-disable import/no-duplicates */
import { createContext, useEffect, useReducer, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  FacebookAuthProvider,
  TwitterAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  getDoc,
  doc,
  addDoc,
  serverTimestamp,
  // query,
  // orderBy,
  // limit,
  // onSnapshot,
  // setDoc,
  // updateDoc,
} from "firebase/firestore";
//
import { getFirebaseConfig } from "../config";

// ----------------------------------------------------------------------

const ADMIN_EMAILS = ["iqbal.hassan@devsinc.com"];

const firebaseApp = initializeApp(getFirebaseConfig());
let db = getFirestore(firebaseApp);

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

const types = {
  initial: "INITIALISE",
};

const reducer = (state, action) => {
  if (action.type === "INITIALISE") {
    const { isAuthenticated, user } = action.payload;
    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user,
    };
  }

  return state;
};

const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [profile, setProfile] = useState();
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    onAuthStateChanged(getAuth(), async (user) => {
      if (user) {
        const docRef = doc(db, "users", user.uid);
        await getDoc(docRef)
          .then((doc) => {
            if (doc.exists()) {
              setProfile(doc.data());
            }
          })
          .catch((error) => {
            console.error(error);
          });

        dispatch({
          type: types.initial,
          payload: { isAuthenticated: true, user },
        });
      } else {
        dispatch({
          type: types.initial,
          payload: { isAuthenticated: false, user: null },
        });
      }
    });
  }, []);

  const login = async (email, password) => {
    return await signInWithEmailAndPassword(getAuth(), email, password);
  };

  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    return await signInWithPopup(getAuth(), provider);
  };

  const loginWithFaceBook = async () => {
    const provider = new FacebookAuthProvider();
    return await signInWithPopup(getAuth(), provider);
  };

  const loginWithTwitter = async () => {
    const provider = new TwitterAuthProvider();
    return await signInWithPopup(getAuth(), provider);
  };

  const registerUser = async (email, password, firstName, lastName) => {
    return await createUserWithEmailAndPassword(
      getAuth(),
      email,
      password
    ).then((res) => {
      addDoc(collection(getFirestore(), "users"), {
        uid: res.user?.uid,
        email,
        displayName: `${firstName} ${lastName}`,
        timestamp: serverTimestamp(),
      });
    });
  };

  const logout = async () => {
    await signOut(getAuth());
  };

  const resetPassword = async (email) => {
    await sendPasswordResetEmail(getAuth(), email);
  };

  const auth = { ...state.user };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: "firebase",
        user: {
          id: auth.uid,
          email: auth.email,
          photoURL: auth.photoURL || profile?.photoURL,
          displayName: auth.displayName || profile?.displayName,
          role: ADMIN_EMAILS.includes(auth.email) ? "admin" : "user",
          phoneNumber: auth.phoneNumber || profile?.phoneNumber || "",
          country: profile?.country || "",
          address: profile?.address || "",
          state: profile?.state || "",
          city: profile?.city || "",
          zipCode: profile?.zipCode || "",
          about: profile?.about || "",
          isPublic: profile?.isPublic || false,
        },
        login,
        registerUser,
        loginWithGoogle,
        loginWithFaceBook,
        loginWithTwitter,
        logout,
        resetPassword,
        updateProfile: () => {},
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };

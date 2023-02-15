import { auth } from './firebase';
import { signInWithEmailAndPassword, signOut, onAuthStateChanged  } from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from 'react';
import Spinner from "../components/Spinner"

// eslint-disable-next-line import/prefer-default-export
export const login = async (email, password) => {
  let [response, error] = [null, null];
  try {
    response = await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    throw err;
  }

  if (response) {
    return response;
  }
  return error;
};

export const currentUser = () => auth.currentUser;

export const logout = () => {
  signOut(auth)
    .then(() => {
    })
    .catch((error) => {
      // An error happened.
      console.log('Error al cerrar sesión:', error);
    });
};


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
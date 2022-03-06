import React, { useState, useEffect } from "react";
import initializeFirebase from "../Firebase/firebase.init";
import {
  getAuth,
  getIdToken,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

// initialize firebase app
initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = React.useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const [admin, setAdmin] = useState(false);
  const [token, setToken] = useState('');

  const navigate = useNavigate();

  const auth = getAuth();

  const registerUser = (email, password, name) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate(`/`);
        const newUser = { email, displayName: name };
        setUser(newUser);
        saveToDatabase(email, name, "POST");

        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then((res) => {})
          .catch((error) => {
            console.log(error);
          });
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  };

  const loginUser = (email, password, location) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate(`/home`);
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  //Google Sign In

  const googleSignIn = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result);
        saveToDatabase(result.user.email, result.user.displayName, "PUT");
        setAuthError("");
        navigate(`/home`);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setAuthError(errorMessage);
      })
      .finally(() => setIsLoading(false));
  };

  // observer user state
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        getIdToken(user)
          .then((idToken) => {
            setToken(idToken);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  useEffect(() => {
    fetch(`http://localhost:5000/user/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);

  const logout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .catch((error) => {})
      .finally(() => setIsLoading(false));
  };

  const saveToDatabase = (email, displayName, method) => {
    const user = { email, displayName };
    fetch("http://localhost:5000/users", {
      method: method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
  };

  return {
    user,
    admin,
    token,
    isLoading,
    authError,
    registerUser,
    loginUser,
    googleSignIn,
    logout,
  };
};

export default useFirebase;

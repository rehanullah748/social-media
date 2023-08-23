"use client";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { createContext, useContext, useEffect, useState } from "react";
const authContext = createContext();
const token = localStorage.getItem("socialToken");
const verifyToken = () => {
  if (token) {
    const decode = jwtDecode(token);
    const expiresIn = new Date(decode.exp * 1000);
    if (new Date() > expiresIn) {
      return null;
    } else {
      return token;
    }
  } else {
    return null;
  }
};
const AuthContextProvider = ({ children }) => {
  const [globalState, setGlobalState] = useState({
    loader: true, // Set loader to true if there is no initialToken
    token: verifyToken(),
  });
  const checkToken = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/check-token?token=${token}`
      );
      console.log(data);
      setGlobalState({ loader: false, token });
    } catch (error) {
      setGlobalState({ ...globalState, loader: false, token: null });
      console.log(error);
    }
  };
  useEffect(() => {
    if (verifyToken()) {
      checkToken();
    }
  }, []);
  return (
    <authContext.Provider value={{ globalState, setGlobalState }}>
      {children}
    </authContext.Provider>
  );
};
export const useAuth = () => useContext(authContext);
export default AuthContextProvider;

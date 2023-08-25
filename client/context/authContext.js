"use client";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { createContext, useContext, useEffect, useState } from "react";
const authContext = createContext();
const verifyToken = (token) => {
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
    token: null,
  });
  const checkToken = async (token) => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/check-token?token=${token}`
      );
      console.log(data);
      setGlobalState({ loader: false, ...data });
    } catch (error) {
      setGlobalState({ ...globalState, loader: false, token: null });
      console.log(error);
    }
  };
  useEffect(() => {
    const token = localStorage.getItem("socialToken");
    if (verifyToken(token)) {
      checkToken(token);
    } else {
      setGlobalState({ ...globalState, loader: false });
    }
  }, []);
  console.log(globalState);
  return (
    <authContext.Provider value={{ globalState, setGlobalState }}>
      {children}
    </authContext.Provider>
  );
};
export const useAuth = () => useContext(authContext);
export default AuthContextProvider;

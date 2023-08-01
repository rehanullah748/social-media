"use client";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
const authContext = createContext();
const token = localStorage.getItem("socialToken");
const AuthContextProvider = ({ children }) => {
  const [globalState, setGlobalState] = useState({
    loader: token ? true : false, // Set loader to true if there is no initialToken
    token: !!token,
  });
  const checkToken = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/check-token?token=${token}`
      );
      setGlobalState({ loader: false, ...data });
    } catch (error) {
      setGlobalState({ ...globalState, loader: false, token: false });
      console.log(error);
    }
  };
  useEffect(() => {
    if (token) {
      checkToken();
    }
  }, []);
  return (
    <authContext.Provider value={{ globalState }}>
      {children}
    </authContext.Provider>
  );
};
export const useAuth = () => useContext(authContext);
export default AuthContextProvider;

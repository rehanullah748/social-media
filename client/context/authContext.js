"use client";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
const authContext = createContext();
const token = localStorage.getItem("socialToken");
const AuthContextProvider = ({ children }) => {
  const [globalState, setGlobalState] = useState({
    loader: true,
    token: false,
  });
  const checkToken = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/check-token?token=${token}`
      );
      setGlobalState({ loader: false, ...data });
    } catch (error) {
      setGlobalState({ ...state, loader: false, token: false });
      console.log(error);
    }
  };
  useEffect(() => {
    checkToken();
  }, []);
  return (
    <authContext.Provider value={{ globalState }}>
      {children}
    </authContext.Provider>
  );
};
export const useAuth = () => useContext(authContext);
export default AuthContextProvider;

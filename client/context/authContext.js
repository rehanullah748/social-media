"use client";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { createContext, useContext, useEffect, useState } from "react";
const authContext = createContext();
const AuthContextProvider = ({ children }) => {
  const [globalState, setGlobalState] = useState({
    loader: false, // Set loader to true if there is no initialToken
    token: null,
  });
  const verifyToken = async (token) => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/check-token?token=${token}`
      );
      return data;
    } catch (error) {
      return null;
    }
  };
  useEffect(() => {
    const token = localStorage.getItem("socialToken");
    if (token) {
      const decode = jwtDecode(token);
      const exp = new Date(decode.exp * 1000);
      if (new Date() > exp) {
        localStorage.removeItem("socialToken");
      } else {
        const callTokenFunction = async () => {
          const result = await verifyToken(token);
          console.log(result);
        };
        callTokenFunction();
      }
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

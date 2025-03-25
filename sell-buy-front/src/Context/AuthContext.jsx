import { createContext, useState, useReducer } from "react";
const AuthContext = createContext();
const reducer = () => {};
export function AuthContextProvider({ children }) {
  const [authState, dispatch] = useReducer(reducer, {
    isAuthenticated: false,
    login: () => {},
    logout: () => {},
    token: "abc123",
    userId: "123",
  });

  return (
    <AuthContext.Provider value={{ authState, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

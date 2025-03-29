import { createContext, useReducer } from "react";
import { userReducer } from "../Reducers.jsx/UserReducer.jsx";

export const UserContext = createContext();
export function UserContextProvider({ children }) {
  const [userState, dispatch] = useReducer(userReducer, {});

  const setUser = (userData) => {
    dispatch({ type: "SET_USER", payload: userData });
  };
  const clearUser = () => {
    dispatch({ type: "CLEAR_USER" });
  };

  return (
    <UserContext.Provider value={{ userState, setUser, clearUser }}>
      {children}
    </UserContext.Provider>
  );
}

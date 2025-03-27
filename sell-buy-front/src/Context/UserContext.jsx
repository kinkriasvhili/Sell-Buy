import { createContext, useReducer } from "react";
import { userReducer } from "../Reducers.jsx/UserReducer.jsx";

export const UserContext = createContext();

const initialState = {
  userName: "",
  email: "",
  age: null,
  city: null,
  phone_number: null,
  user_id: "",
};

export function UserContextProvider({ children }) {
  const [userState, dispatch] = useReducer(userReducer, initialState);

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

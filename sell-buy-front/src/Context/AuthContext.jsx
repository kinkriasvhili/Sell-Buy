import { createContext, useReducer } from "react";
import { authReducer } from "../Reducers.jsx/AuthReducer";
export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [authState, dispatch] = useReducer(authReducer, {
    isAuthenticated: false,
    token: null,
    refreshToken: null,
    emailVerified: false,
    error: null,
  });

  const verifyEmail = () => {
    console.log("verification");
  };
  const register = () => {
    console.log("register");
  };
  const login = () => {
    console.log("logIn");
  };
  const logout = () => {
    return; //
  };
  return (
    <AuthContext.Provider
      value={{ authState, verifyEmail, register, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

/**
  const verifyEmail = async (email) => {
    try {
      const res = await fetch("/api/auth/email_confrimation/", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (res.ok) {
        dispatch({ type: "EMAIL_VERIFICATION_SUCCESS", payload: email });
      } else {
        dispatch({ type: "EMAIL_VERIFICATION_FAILED", payload: data.error });
      }
    } catch (error) {
      dispatch({ type: "EMAIL_VERIFICATION_FAILED", payload: "Network error" });
    }
  };

  // Register
  const register = async (userData) => {
    try {
      const res = await fetch("/api/auth/register/", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();

      if (res.ok) {
        dispatch({ type: "REGISTER_SUCCESS" });
      } else {
        dispatch({ type: "REGISTER_FAILED", payload: data.error });
      }
    } catch (error) {
      dispatch({ type: "REGISTER_FAILED", payload: "Network error" });
    }
  };

  // Login
  const login = async (email, password) => {
    try {
      const res = await fetch("/api/auth/login/", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("accessToken", data.acces_token);
        localStorage.setItem("refreshToken", data.refresh_token);
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: {
            accessToken: data.access_token,
            refreshToken: data.refresh_token,
          },
        });
      } else {
        dispatch({ type: "LOGIN_FAILED", payload: data.error });
      }
    } catch (error) {
      dispatch({ type: "LOGIN_FAILED", payload: "Network error" });
    }
  };

  // Logout
  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    dispatch({ type: "LOGOUT" });
  };
   */

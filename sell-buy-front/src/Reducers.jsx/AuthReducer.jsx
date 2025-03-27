export const authReducer = (state, action) => {
  switch (action.type) {
    case "EMAIL_VERIFICATION_SUCCESS":
      return { ...state, emailVerified: true, email: action.payload };
    case "EMAIL_VERIFICATION_FAILED":
      return { ...state, emailVerified: false, error: action.payload };

    case "REGISTER_SUCCESS":
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
        error: null,
      };
    case "REGISTER_FAILED":
      return { ...state, error: action.payload };

    case "LOGIN_SUCCESS":
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.accesToken,
        refreshToken: action.payload.refreshToken,
        error: null,
      };
    case "LOGIN_FAILED":
      return { ...state, error: action.payload };

    case "LOGOUT":
      return {
        ...state,
        emailVerified: false,
        isAuthenticated: false,
        token: null,
        refreshToken: null,
        error: null,
      };

    default:
      return state;
  }
};

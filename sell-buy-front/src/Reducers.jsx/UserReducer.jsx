export const userReducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, ...action.payload };
    case "CLEAR_USER":
      return {
        userName: "",
        email: "",
        age: null,
        city: null,
        phone_number: null,
        user_id: "",
      };
    default:
      return state;
  }
};

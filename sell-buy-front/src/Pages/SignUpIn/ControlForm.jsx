import { useState } from "react";

export function useControlForm() {
  const [signupData, setSignUpData] = useState({
    user_name: "",
    email: "",
    age: "",
    city: "",
    phone_number: "",
    password: "",
    repeat_password: "",
  });

  const [inputsValidation, setInputsValidation] = useState({
    isAgeValid: false,
    isPasswordValid: false,
    isEmailValid: false,
    isNumberValid: false,
    isUserNameValid: false,
    isCityValid: false,
    passwordMatch: false,
  });

  const validatePassword = (value) => value.length >= 6;
  const validateUserName = (value) => value.length >= 4;
  const validateCity = (value) => value.length >= 1;
  const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  const validAge = (value) => Number(value) >= 18 && Number(value) <= 80;
  const validNumber = (value) => /^5\d{8}$/.test(value);

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "age") {
      value = isNaN(Number(value))
        ? ""
        : Math.max(0, Math.min(Number(value), 80));
    }
    if (value === "0") value = "";

    setSignUpData((prev) => ({ ...prev, [name]: value }));

    setInputsValidation((prev) => ({
      ...prev,
      isUserNameValid:
        name === "user_name" ? validateUserName(value) : prev.isUserNameValid,
      isCityValid: name === "city" ? validateCity(value) : prev.isCityValid,
      isPasswordValid:
        name === "password" ? validatePassword(value) : prev.isPasswordValid,
      isEmailValid: name === "email" ? validateEmail(value) : prev.isEmailValid,
      isAgeValid: name === "age" ? validAge(value) : prev.isAgeValid,
      isNumberValid:
        name === "phone_number" ? validNumber(value) : prev.isNumberValid,
      passwordMatch:
        name === "repeat_password"
          ? value === signupData.password
          : prev.passwordMatch,
    }));
  };

  return {
    signupData,
    setSignUpData,
    inputsValidation,
    setInputsValidation,
    handleChange,
  };
}

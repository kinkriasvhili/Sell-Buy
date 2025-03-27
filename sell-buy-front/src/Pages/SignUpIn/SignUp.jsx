import styles from "./signUpIn.module.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Password, SignForm } from "../../Components/Ui/Inputs";
import { FormButton } from "../../Components/Ui/Buttons";
import { SignFormRightSideSvg } from "../../Components/Ui/SvgAnimations";
import { useNavigate } from "react-router-dom";
export default function SignIn() {
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
  const validateEmail = (value) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(value);
  };

  const validAge = (value) => Number(value) >= 18 && Number(value) <= 80;

  const validNumber = (value) => {
    const pattern = /^5\d{8}$/;
    return pattern.test(value);
  };

  const handleChange = (e, inputName) => {
    let { name, value } = e.target;

    if (name === "age") {
      value = Number(value);
      if (isNaN(value)) value = "";
      else value = Math.max(0, Math.min(value, 80));
    }
    value == 0 ? (value = "") : "";
    setSignUpData((prev) => ({ ...prev, [name]: value }));

    setInputsValidation((prev) => ({
      ...prev,
      isUserNameValid:
        inputName == "user_name"
          ? validateUserName(value)
          : prev.isUserNameValid,
      isCityValid: inputName == "city" ? validateCity(value) : prev.isCityValid,
      isPasswordValid:
        inputName === "password"
          ? validatePassword(value)
          : prev.isPasswordValid,
      isEmailValid:
        inputName === "email" ? validateEmail(value) : prev.isEmailValid,
      isAgeValid: inputName === "age" ? validAge(value) : prev.isAgeValid,
      isNumberValid:
        inputName === "phone_number" ? validNumber(value) : prev.isNumberValid,

      passwordMatch:
        inputName === "repeat_password"
          ? value === signupData.password
          : prev.passwordMatch,
    }));

    // Debugging logs
    console.log(inputsValidation);
  };
  const makeClass = (isValid) => {
    return !isValid ? styles.inputRed : "";
  };
  //
  const navigate = useNavigate();
  const allValid = Object.values(inputsValidation).every(
    (value) => value === true
  );
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/email-confrimation");
  };
  return (
    <div className={styles.container}>
      <div className={`${styles.leftSide} ${styles.registerForm}`}>
        <h2>Sign In</h2>
        <span>Please login to continue yo your account</span>
        <form action="">
          <SignForm
            label={"UserName"}
            type={"text"}
            placeholder={"UserName"}
            name="user_name"
            handleChange={handleChange}
            value={signupData}
            className={makeClass(inputsValidation.isUserNameValid)}
          />
          <SignForm
            label={"Email"}
            type={"email"}
            placeholder={"Mail"}
            name="email"
            handleChange={handleChange}
            value={signupData}
            className={makeClass(inputsValidation.isEmailValid)}
          />
          <div className={styles.tripleInp}>
            <SignForm
              label={"Age"}
              type={"number"}
              placeholder={"Age"}
              name="age"
              handleChange={handleChange}
              value={signupData}
              className={makeClass(inputsValidation.isAgeValid)}
            />
            <SignForm
              label={"City"}
              type={"text"}
              placeholder={"City"}
              name="city"
              handleChange={handleChange}
              value={signupData}
              className={makeClass(inputsValidation.isCityValid)}
            />
            <SignForm
              label={"Phone Number"}
              type={"number"}
              placeholder={"Phone Number"}
              name="phone_number"
              handleChange={handleChange}
              value={signupData}
              className={makeClass(inputsValidation.isNumberValid)}
            />
          </div>
          <Password
            label={"Password"}
            placeholder={"Password"}
            name="password"
            handleChange={handleChange}
            value={signupData}
            className={makeClass(inputsValidation.isPasswordValid)}
          />
          <Password
            label="Repeat Password"
            placeholder="Repeat Password"
            name="repeat_password"
            handleChange={handleChange}
            value={signupData}
            className={makeClass(inputsValidation.passwordMatch)}
          />
          <FormButton
            handleClick={handleClick}
            type="submit"
            className={`${styles.signButton} wht-btn `}
            text={"Create Account"}
            disabled={!allValid}
          />
          <span className={styles.linkSpam}>
            Already have an account? <Link to={"/login"}>Sign In</Link>
          </span>
        </form>
      </div>
      <div>
        <SignFormRightSideSvg
          containerClass={`${styles.rightSide} 
          mainContainer`}
          title="Welcome!"
          svgClass={styles.svgContainer}
        />
      </div>
    </div>
  );
}

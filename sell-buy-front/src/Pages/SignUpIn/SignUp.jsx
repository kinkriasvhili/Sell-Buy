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
    passwordMatch: false,
  });

  const validatePassword = (value) => {
    return value.length >= 6;
  };
  const validateEmail = (value) => {
    // Basic email pattern
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(value);
  };

  const validAge = (value) => {
    return Number(value) >= 18;
  };

  const validNumber = (value) => {
    // Regular expression to check if the number is 9 digits and starts with 5
    const pattern = /^5\d{8}$/;
    // Explanation:
    // ^      - Start of the string
    // 5      - The number must start with '5'
    // \d{8}  - Followed by exactly 8 digits (total 9 digits)
    // $      - End of the string

    return pattern.test(value); // Returns true if the number is valid, false otherwise
  };
  const handleChange = (e, inputName) => {
    const { name, value } = e.target;

    // Update signup data
    setSignUpData((prev) => ({ ...prev, [name]: value }));

    // Perform validation based on the input name
    if (inputName === "password") {
      setInputsValidation((prev) => ({
        ...prev,
        isPasswordValid: validatePassword(value),
      }));
      console.log("Password validation:", validatePassword(value));
    } else if (inputName === "email") {
      setInputsValidation((prev) => ({
        ...prev,
        isEmailValid: validateEmail(value),
      }));
      console.log("Email validation:", validateEmail(value));
    } else if (inputName === "age") {
      setInputsValidation((prev) => ({
        ...prev,
        isAgeValid: validAge(value),
      }));
      console.log("Age validation:", validAge(value));
    } else if (inputName === "repeat_password") {
      setInputsValidation((prev) => ({
        ...prev,
        passwordMatch: value === signupData.password,
      }));
      console.log("Passwords match:", value === signupData.password);
    } else if ((inputName = "phone_number")) {
      setInputsValidation((prev) => ({
        ...prev,
        passwordMatch: validNumber(value),
      }));
      console.log("valid number:", validNumber(value));
    }
  };

  //
  const navigate = useNavigate();
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
            label={"UserName:"}
            type={"text"}
            placeholder={"UserName"}
            name="user_name"
            handleChange={handleChange}
            value={signupData}
          />
          <SignForm
            label={"Email:"}
            type={"email"}
            placeholder={"Mail"}
            name="email"
            handleChange={handleChange}
            value={signupData}
          />
          <div className={styles.tripleInp}>
            <SignForm
              label={"Age:"}
              type={"number"}
              placeholder={"Age"}
              name="age"
              handleChange={handleChange}
              value={signupData}
            />
            <SignForm
              label={"City:"}
              type={"text"}
              placeholder={"City"}
              name="city"
              handleChange={handleChange}
              value={signupData}
            />
            <SignForm
              label={"Phone Number:"}
              type={"number"}
              placeholder={"Phone Number"}
              name="phone_number"
              handleChange={handleChange}
              value={signupData}
            />
          </div>
          <Password
            label={"Password:"}
            placeholder={"Password"}
            name="password"
            handleChange={handleChange}
            value={signupData}
          />
          <Password
            label="Repeat Password:"
            placeholder="Repeat Password"
            name="repeat_password"
            handleChange={handleChange}
            value={signupData}
          />
          <FormButton
            handleClick={handleClick}
            type="submit"
            className={`${styles.signButton} wht-btn `}
            text={"Create Account"}
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

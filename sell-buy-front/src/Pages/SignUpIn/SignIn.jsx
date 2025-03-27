import styles from "./signUpIn.module.css";
import { React, useState } from "react";
import { Link } from "react-router-dom";
import { SignForm, Password } from "../../Components/Ui/Inputs";
import { FormButton } from "../../Components/Ui/Buttons";
import { SignFormRightSideSvg } from "../../Components/Ui/SvgAnimations";
import { useNavigate } from "react-router-dom";
import { useControlForm } from "./ControlForm";

export default function SignIn() {
  const { signupData, inputsValidation, handleChange } = useControlForm();
  const isLoginValid =
    inputsValidation.isPasswordValid && inputsValidation.isEmailValid;
  const makeClass = (isValid) => {
    return !isValid ? styles.inputRed : "";
  };
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/email-confrimation");
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <h2>Sign In</h2>
        <span>Please login to continue yo your account</span>
        <form action="">
          <SignForm
            label={"Email"}
            type={"email"}
            placeholder={"Mail"}
            name="email"
            handleChange={handleChange}
            value={signupData}
            className={makeClass(inputsValidation.isEmailValid)}
          />
          <Password
            label={"Password"}
            placeholder={"Password"}
            name="password"
            handleChange={handleChange}
            value={signupData}
            className={makeClass(inputsValidation.isPasswordValid)}
          />
          <FormButton
            handleClick={handleClick}
            type="submit"
            className={`${styles.signButton} wht-btn `}
            text={"Create Account"}
            disabled={!isLoginValid}
          />
        </form>
        <span className={styles.linkSpam}>
          Need a account <Link to={"/signup"}>Create One</Link>
        </span>
      </div>
      <div>
        <SignFormRightSideSvg
          containerClass={`${styles.rightSide} 
          mainContainer`}
          title="Welcome Back"
          svgClass={styles.svgContainer}
        />
      </div>
    </div>
  );
}

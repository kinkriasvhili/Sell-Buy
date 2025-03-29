import styles from "./signUpIn.module.css";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Password, SignForm } from "../../Components/Ui/Inputs";
import { FormButton } from "../../Components/Ui/Buttons";
import { SignFormRightSideSvg } from "../../Components/Ui/SvgAnimations";
import { useNavigate } from "react-router-dom";
import { useControlForm } from "./ControlForm";
export default function SignIn() {
  const { signupData, inputsValidation, handleChange } = useControlForm();
  const navigate = useNavigate();

  const makeClass = (isValid) => {
    return !isValid ? styles.inputRed : "";
  };
  const allValid = Object.values(inputsValidation).every(
    (value) => value === true
  );
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/email-confrimation", {
      state: { from: "reg", data: signupData },
    });
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

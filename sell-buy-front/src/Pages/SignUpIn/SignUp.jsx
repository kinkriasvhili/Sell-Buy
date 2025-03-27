import styles from "./signUpIn.module.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Password, SignForm } from "../../Components/Ui/Inputs";
import { FormButton } from "../../Components/Ui/Buttons";
import { SignFormRightSideSvg } from "../../Components/Ui/SvgAnimations";
import { useNavigate } from "react-router-dom";
export default function SignIn() {
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
          />
          <SignForm label={"Email:"} type={"text"} placeholder={"Mail"} />
          <div className={styles.tripleInp}>
            <SignForm label={"Age:"} type={"number"} placeholder={"Age"} />
            <SignForm label={"City:"} type={"text"} placeholder={"City"} />
            <SignForm
              label={"Phone Number:"}
              type={"number"}
              placeholder={"Phone Number"}
            />
          </div>
          <Password label={"Password:"} placeholder={"Password"} />
          <Password label="Repeat Password:" placeholder="Repeat Password" />
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

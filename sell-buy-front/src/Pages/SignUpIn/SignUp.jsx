import styles from "./signUpIn.module.css";
import React from "react";
import { Link } from "react-router-dom";
import { SignForm } from "../../Components/Ui/Inputs";
import { FormButton } from "../../Components/Ui/Buttons";
import { SignFormRightSideSvg } from "../../Components/Ui/SvgAnimations";
export default function SignIn() {
  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.container}>
      <div className={`${styles.leftSide} ${styles.registerForm}`}>
        <h2>Sign In</h2>
        <span>Please login to continue yo your account</span>
        <form action="">
          <SignForm label={"UserName:"} type={"text"} placholder={"UserName"} />
          <SignForm label={"Email:"} type={"text"} placholder={"Mail"} />
          <SignForm
            label={"Password:"}
            type={"password"}
            placholder={"Password"}
          />
          <SignForm
            label={"Repeat Password:"}
            type={"password"}
            placholder={"Repeat Password"}
          />
          <FormButton
            handleClick={handleClick}
            type="submit"
            className={`${styles.signButton} wht-btn `}
            text={"Create Account"}
          />
        </form>
        <span className={styles.linkSpam}>
          Already have an account? <Link to={"/login"}>Sign In</Link>
        </span>
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

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
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpData((prev) => ({ ...prev, [name]: value }));
  };
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
            type={"text"}
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

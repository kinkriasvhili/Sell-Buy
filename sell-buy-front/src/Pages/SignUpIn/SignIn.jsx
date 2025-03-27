import styles from "./signUpIn.module.css";
import { React, useState } from "react";
import { Link } from "react-router-dom";
import { SignForm, Password } from "../../Components/Ui/Inputs";
import { FormButton } from "../../Components/Ui/Buttons";
import { SignFormRightSideSvg } from "../../Components/Ui/SvgAnimations";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/email-confrimation");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <h2>Sign In</h2>
        <span>Please login to continue yo your account</span>
        <form action="">
          <SignForm
            label={"Email:"}
            type={"text"}
            placeholder={"Mail"}
            name="email"
            handleChange={handleChange}
            value={loginData}
          />
          <Password
            label={"Password:"}
            placeholder={"Password"}
            name="password"
            handleChange={handleChange}
            value={loginData}
          />
          <FormButton
            handleClick={handleClick}
            type="submit"
            className={`${styles.signButton} wht-btn `}
            text={"Sign In"}
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

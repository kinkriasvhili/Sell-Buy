import styles from "./emailConfrimation.module.css";
import { FormButton } from "../../Components/Ui/Buttons";
import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
export default function EmailConfirmation() {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const { setUser, userState } = useContext(UserContext);
  const { repeat_password, ...filteredUserData } = location.state.data;
  const { from } = location.state;
  console.log(from);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (code === "1") {
      if (from == "reg") {
        setUser(filteredUserData);
        // setUser and we need to post it on fetch from here.
        // get user from fetch
        // set authentication
      } else if (from == "log") {
        console.log(location.state.data);
        // sent email to data and get user from fetch
        // set authentication
      }
      navigate("/");
    } else {
      setError("Invalid confirmation code. Please try again.");
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h2>Email Confirmation</h2>
        <p>{setUser.user_name}</p>
        <p>
          We've sent a confirmation code to your email. Please enter it below.
        </p>

        <form>
          <input
            type="text"
            placeholder="Enter code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className={styles.input}
          />
          {error && <span className={styles.error}>{error}</span>}
          <FormButton
            handleClick={handleSubmit}
            type="submit"
            text="Verify"
            className={styles.button}
          />
        </form>

        <button
          className={`${styles.resend} wht-btn`}
          onClick={() => alert("New code sent!")}
        >
          Resend Code
        </button>
      </div>
    </div>
  );
}

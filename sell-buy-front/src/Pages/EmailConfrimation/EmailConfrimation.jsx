import styles from "./emailConfrimation.module.css";
import { FormButton } from "../../Components/Ui/buttons/Buttons";
import React, { useState, useContext, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { postEmailOrCodeConfirmation } from "../../fetchData/postData";

export default function EmailConfirmation() {
  const queryClient = useQueryClient();

  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const codeRef = useRef();

  const navigate = useNavigate();
  const location = useLocation();

  const createCodeMutation = useMutation({
    mutationFn: (data) => postEmailOrCodeConfirmation(data),
    onSuccess: (data) => {
      console.log(data);
      navigate("/");
    },
    onError: (error) => {
      setError("Invalid confirmation code. Please try again.");
    },
  });
  const { setUser, userState } = useContext(UserContext);
  const { repeat_password, ...filteredUserData } = location.state.data;
  const { from } = location.state;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (from == "reg") {
      createCodeMutation.mutate({
        email: location.state.data.email,
        code: code,
      });
      // setUser(filteredUserData);
      // setUser and we need to post it on fetch from here.
      // get user from fetch
      // set authentication
    } else if (from == "log") {
      console.log(location.state.data);
      // sent email to data and get user from fetch
      // set authentication
    }
  };
  const resendCode = () => {};
  useEffect(() => {
    codeRef.current.focus();
    // console.log(userState);
  }, [userState, setUser]);
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
            disabled={createCodeMutation.isPending}
            ref={codeRef}
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

        <button className={`${styles.resend} wht-btn`} onClick={resendCode}>
          Resend Code
        </button>
      </div>
    </div>
  );
}

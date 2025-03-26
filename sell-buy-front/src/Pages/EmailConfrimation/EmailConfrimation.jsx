import styles from "./emailConfrimation.module.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormButton } from "../../Components/Ui/Buttons";

export default function EmailConfirmation() {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (code === "123456") {
      // Replace with actual validation logic
      navigate("/"); // Redirect after success
    } else {
      setError("Invalid confirmation code. Please try again.");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h2>Email Confirmation</h2>
        <p>
          We've sent a confirmation code to your email. Please enter it below.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className={styles.input}
          />
          {error && <span className={styles.error}>{error}</span>}
          <FormButton type="submit" text="Verify" className={styles.button} />
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

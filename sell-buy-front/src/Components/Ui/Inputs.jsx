import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
export function SignForm({
  label,
  type,
  placeholder,
  name,
  handleChange,
  value,
}) {
  return (
    <div>
      <label>{label}</label>
      <input
        min={type === "number" ? "0" : undefined}
        type={type}
        placeholder={placeholder}
        value={value[name]}
        onChange={(e) => {
          handleChange(e, name);
        }}
        name={name}
      />
    </div>
  );
}

export function Password({ label, placeholder, name, handleChange, value }) {
  const [passwordSee, setPasswordSee] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <label>{label}</label>
      <input
        type={passwordSee ? "text" : "password"}
        placeholder={placeholder}
        style={{ paddingRight: "30px" }}
        onChange={(e) => {
          handleChange(e, name);
        }}
        name={name}
        value={value[name]}
      />
      <button
        type="button"
        onClick={() => setPasswordSee(!passwordSee)}
        style={{
          position: "absolute",
          right: "2%",
          top: "50%",
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        <FontAwesomeIcon icon={passwordSee ? faEyeSlash : faEye} />
      </button>
    </div>
  );
}

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./button.module.css";

export function ButtonWIcon({ text, icon, iconSize, name, afterEffect }) {
  return (
    <button
      className={`${name?.[0] ? name?.[0] : name} flex-center 
      ${name == "wht-btn" ? styles.signIn : ""} 
      ${styles[afterEffect]}`}
    >
      {text ? `${text}\u00A0\u00A0` : ""}
      <FontAwesomeIcon icon={icon} size={iconSize} />
    </button>
  );
}

export function FormButton({ handleClick, type, className, text, disabled }) {
  return (
    <button
      onClick={(e) => {
        handleClick(e);
      }}
      type={type}
      className={className}
      disabled={disabled}
      style={{
        opacity: disabled ? 0.5 : 1, // Lighter when disabled
        cursor: disabled ? "not-allowed" : "pointer", // No pointer when disabled
      }}
    >
      {text}
    </button>
  );
}

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./button.module.css";

export function ButtonWIcon({ text, icon, iconSize, name, afterEffect }) {
  return (
    <button
      className={`${name} flex-center 
      ${name == "wht-btn" ? styles.signIn : ""} 
      ${styles[afterEffect]}`}
    >
      {console.log(afterEffect + name)}
      {text ? text : ""}
      <FontAwesomeIcon icon={icon} size={iconSize} />
    </button>
  );
}

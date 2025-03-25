import styles from "./nav.module.css";
import { ButtonWIcon } from "../Ui/Buttons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
export default function Search() {
  const [inputFocus, setInputFocus] = useState(false);
  return (
    <div
      className={`${styles.searchBox} flex-center ${
        inputFocus ? styles.focused : ""
      }`}
    >
      <input
        onFocus={() => {
          setInputFocus(true);
        }}
        onBlur={() => {
          setInputFocus(false);
        }}
        type="text"
      />
      <ButtonWIcon icon={faMagnifyingGlass} iconSize="1x" />
    </div>
  );
}

//

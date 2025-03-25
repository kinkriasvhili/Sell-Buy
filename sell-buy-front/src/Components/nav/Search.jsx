import styles from "./nav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
export default function Search() {
  const [inputFocus, setInputFocus] = useState(false);
  console.log(inputFocus);
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
      <button className={`flex-center `}>
        <FontAwesomeIcon icon={faMagnifyingGlass} size="1x" />
      </button>
    </div>
  );
}

//

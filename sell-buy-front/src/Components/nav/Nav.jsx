import styles from "./nav.module.css";
import "@fontsource/love-light";
import "@fontsource/love-light/400.css";
import { Link } from "react-router-dom";
import Search from "./Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
export default function Nav() {
  return (
    <nav>
      <div className={styles.leftCont}>
        <Link to={"/"}>
          {" "}
          <span className={styles.logo}>S&B</span>{" "}
        </Link>
      </div>
      <div className={styles.middleCont}>
        <Search />
      </div>
      <div className={`${styles.rightCont} flex-center`}>
        <Link to={"/logIn"}>
          <button className={`wht-btn flex-center ${styles.signIn}`}>
            Sign In
            <FontAwesomeIcon icon={faUser} size="1x" />
          </button>
        </Link>
        <Link to={`/guest/cart`}>
          <button className={`linked-btn flex-center`}>
            {" "}
            <FontAwesomeIcon icon={faShoppingCart} size="1x" /> {/* Cart */}
          </button>
        </Link>
      </div>
    </nav>
  );
}

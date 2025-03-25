import styles from "./nav.module.css";
import "@fontsource/love-light";
import "@fontsource/love-light/400.css";
import { Link } from "react-router-dom";
import Search from "./Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faUser,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { ButtonWIcon } from "../Ui/Buttons";
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
        <Link to={`/guest/favorite`}>
          <ButtonWIcon
            icon={faHeart}
            iconSize="1x"
            name="linked-btn"
            styles={styles}
            afterEffect="favoriteBtn"
          />
        </Link>
        <Link to={`/guest/cart`}>
          <ButtonWIcon
            icon={faShoppingCart}
            iconSize="1x"
            name="linked-btn"
            styles={styles}
            afterEffect="cartBtn"
          />
        </Link>
        <Link to={"/Orders"}>
          <button className={`flex-center wht-btn ${styles.orders}`}>
            Returns & Orders
          </button>
        </Link>
        <Link to={"/logIn"}>
          <ButtonWIcon
            text="Sign In"
            icon={faUser}
            iconSize="1x"
            name="wht-btn"
            styles={styles}
          />
        </Link>
      </div>
    </nav>
  );
}

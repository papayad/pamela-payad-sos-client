import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "./Header.scss";
import closeIcon from "../../assets/icons/close_FILL0_wght400_GRAD0_opsz24.svg";
// replace with actual icon
import sosLogo from "../../assets/icons/image0.webp";

function Header() {
  return (
    <>
      <header className="header">
        <div className="header__logo">
          <img
            className="header__logo-img"
            src={sosLogo}
            alt="sonnys on sale logo"
          />
        </div>
        <div className="header__menu--mobile">
          <Menu
            className="header__burger"
            customCrossIcon={<img src={closeIcon} />}
            width={"18.75rem"}
            right
          >
            {/* change to icon */}
            <Link className="header__burger-item" to={"/"}>
              home
            </Link>
            <Link to={"/signup"}>sign up</Link>
            <Link to={"/login"}>log in</Link>
            <Link to={"/createlisting"}>create listing</Link>
            <Link to={"/mylistings"}>my listings</Link>
          </Menu>
        </div>
      </header>
    </>
  );
}

export default Header;

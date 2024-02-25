import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "./Header.scss";
import sosLogo from "../../assets/logo/Asset 1.svg";

function Header() {
  return (
    <>
      <header className="header">
        <div className="header__logo">
          <Link to={"/"}>
            <img className="header__logo-img" src={sosLogo} alt="sonnys on sale logo" />
          </Link>
        </div>
        <div className="header__menu--mobile">
          <Menu className="header__burger" width={"18.75rem"} right>
            {/* change to icon */}
            <Link to={"/"}>home</Link>
            <Link to={"/signup"}>sign up</Link>
            <Link to={"/login"}>log in</Link>
            <Link to={"/createlisting"}>create listing</Link>
            <Link to={"/mylistings"}>my listings</Link>
          </Menu>
        </div>
        <ul className="header__nav--desktop">
          <div className="header__nav-container">
            <li className="header__nav-item">
              <Link className="header__nav-link" to={"/createlisting"}>
                create listing
              </Link>
            </li>
            <li className="header__nav-item">
              <Link className="header__nav-link" to={"/mylistings"}>
                my listings
              </Link>
            </li>
          </div>
          <div className="header__nav-container--left">
            <li className="header__nav-item">
              <Link className="header__nav-link--signup" to={"/signup"}>
                sign up
              </Link>
            </li>
            <li className="header__nav-item">
              <Link className="header__nav-link" to={"/login"}>
                log in
              </Link>
            </li>
          </div>
        </ul>
      </header>
    </>
  );
}

export default Header;

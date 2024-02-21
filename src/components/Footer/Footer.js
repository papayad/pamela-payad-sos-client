import { Link } from "react-router-dom";
import "./Footer.scss";
import sosLogo from "../../assets/logo/Asset 1.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <Link to={"/"}>
          <img className="footer__logo-img" src={sosLogo} alt="sonnys on sale logo" />
        </Link>
      </div>
      <p className="footer__copyright">Created by Pamela Payad 2024</p>
    </footer>
  );
}

export default Footer;

import "./header.css";
import { useState } from "react";
import { icon_humburger, Logo } from "../../assets";

const Header = () => {
  const [navigationMenu, setNavigationMenu] = useState(false);

  return (
    <div className="header" id="footer">
      <div className="header_logo">
        <img src={Logo} alt="Website Logo" />
      </div>
      <div className={`header_content ${navigationMenu ? "toggled" : ""}`}>
        <div className="header_content_navigation">
          <p>Features</p>
          <p>Pricing</p>
          <p>Resources</p>
        </div>
        <hr className="header_content-hr" />
        <div className="header_content_buttons">
          <button type="button" className="header_content_buttons-signin">
            Login
          </button>
          <button
            type="button"
            className="header_content_buttons-signup cyan_btn"
          >
            Sign Up
          </button>
        </div>
      </div>
      <div className="header_menutoggler">
        <img
          src={icon_humburger}
          alt="Menu Toggler"
          onClick={() => setNavigationMenu(!navigationMenu)}
        />
      </div>
    </div>
  );
};

export default Header;

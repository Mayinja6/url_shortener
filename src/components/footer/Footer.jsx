import "./footer.css";

import {
  Logo,
  icon_instagram,
  icon_twitter,
  icon_pinterest,
  icon_facebook,
} from "../../assets";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_img">
        <img src={Logo} alt="Footer_img" />
      </div>
      <div className="footer_navigation">
        <div className="footer_navigation-row">
          <p className="footer_navigation-row_heading">Features</p>
          <p>
            <span>Link Shortening</span>
          </p>
          <p>
            <span>Branded Links</span>
          </p>
          <p>
            <span>Analytics</span>
          </p>
        </div>
        <div className="footer_navigation-row">
          <p className="footer_navigation-row_heading">Resources</p>
          <p>
            <span>Blog</span>
          </p>
          <p>
            <span>Developer</span>
          </p>
          <p>
            <span>Support</span>
          </p>
        </div>
        <div className="footer_navigation-row">
          <p className="footer_navigation-row_heading">Company</p>
          <p>
            <span>About</span>
          </p>
          <p>
            <span>Our Team</span>
          </p>
          <p>
            <span>Careers</span>
          </p>
          <p>
            <span>Contact</span>
          </p>
        </div>
      </div>
      <div className="footer_social_icons">
        <img src={icon_facebook} alt="Social Media Icon" />
        <img src={icon_twitter} alt="Social Media Icon" />
        <img src={icon_pinterest} alt="Social Media Icon" />
        <img src={icon_instagram} alt="Social Media Icon" />
      </div>
    </div>
  );
};

export default Footer;

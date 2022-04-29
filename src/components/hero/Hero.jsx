import "./hero.css";

import { icon_illust_working } from "../../assets";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero_content">
        <h1 className="hero_content_heading">More than just shorter links</h1>
        <p className="hero_content_text">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="hero_content_btn  cyan_btn">Get Started</button>
      </div>
      <div className="hero_img">
        <img src={icon_illust_working} alt="hero_img" />
      </div>
    </div>
  );
};

export default Hero;

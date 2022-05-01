import "./statistics.css";
import {
  icon_detailed_records,
  icon_fully_custom,
  icon_brand_recog,
} from "../../assets";

const Statistics = () => {
  return (
    <div className="statistics">
      <div className="statistics_text">
        <h1 className="statistics_text-heading">Advanced Statistics</h1>
        <p className="statistics_text-heading-p">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="statistics_brands">
        <hr className="statistics_brands-hr" />
        <div className="statistics_brands-div brand1">
          <img src={icon_brand_recog} alt="statistics_brands-div-img" />

          <h2>Brand Recognition</h2>
          <p>
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
        <div className="statistics_brands-div brand2">
          <img src={icon_detailed_records} alt="statistics_brands-div-img" />

          <h2>Detailed Records</h2>
          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        <div className="statistics_brands-div brand3">
          <img src={icon_fully_custom} alt="statistics_brands-div-img" />

          <h2>Fully Customizable</h2>
          <p>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;

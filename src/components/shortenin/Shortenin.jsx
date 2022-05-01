import "./shortenin.css";

import LinkComponent from "./LinkComponent";

const Shortenin = () => {
  return (
    <div className="shortenin">
      <div className="shortenin_calltoaction">
        <input
          type="url"
          placeholder="Shorten a link here..."
          className="shortenin_calltoaction-input"
        />
        <button className="shortenin_calltoaction-btn cyan_btn">
          Shorten it!
        </button>
        <span className="shortenin_calltoaction-msg">please add a link</span>
      </div>
      <LinkComponent url={`htttps://m.facebook.com/`} />
    </div>
  );
};

export default Shortenin;

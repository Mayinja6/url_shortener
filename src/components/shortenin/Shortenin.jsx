import { useState } from "react";
import "./shortenin.css";

const Shortenin = () => {
  const [url, setUrl] = useState("");

  return (
    <div className="shortenin">
      <div className="shortenin_calltoaction">
        <input
          type="url"
          placeholder="Shorten a link here..."
          className="shortenin_calltoaction-input"
          onChange={(e) => setUrl(e.target.value)}
        />
        <button className="shortenin_calltoaction-btn cyan_btn">
          Shorten it!
        </button>
      </div>
      <div className="shortenin_results">Shortenin Results</div>
    </div>
  );
};

export default Shortenin;

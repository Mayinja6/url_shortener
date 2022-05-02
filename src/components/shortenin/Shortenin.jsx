import "./shortenin.css";
import { useRef, useState } from "react";
import LinkComponent from "./LinkComponent";

const Shortenin = () => {
  const inputRef = useRef();
  const [error, setError] = useState(false);
  const [linkComps, setLinkComps] = useState([]);

  const setErrorFunc = () => {
    setTimeout(() => setError(true), 0);
    setTimeout(() => setError(false), 1000);
  };

  const getShortifiedLink = async (url) => {
    setLinkComps([
      ...linkComps,
      {
        url,
        newUrl: "http://cutt.ly.com",
      },
    ]);
  };

  return (
    <div className="shortenin">
      <div className="shortenin_calltoaction">
        <input
          ref={inputRef}
          type="url"
          placeholder="Shorten a link here..."
          className={`shortenin_calltoaction-input ${error && "error"}`}
        />
        <button
          className="shortenin_calltoaction-btn cyan_btn"
          onClick={() =>
            inputRef.current.value === ""
              ? setErrorFunc()
              : getShortifiedLink(inputRef.current.value)
          }
        >
          Shorten it!
        </button>
        <span className={`shortenin_calltoaction-msg ${error && "error"}`}>
          please add a link
        </span>
      </div>
      <>
        {linkComps === [] ? (
          <></>
        ) : (
          linkComps.map((link, index) => (
            <LinkComponent key={index} url={link.url} newUrl={link.newUrl} />
          ))
        )}
      </>
    </div>
  );
};

export default Shortenin;

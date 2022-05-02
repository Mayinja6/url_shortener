import { useState } from "react";

const LinkComponent = ({ url, newUrl }) => {
  const [copied, setCopied] = useState(false);

  const copytoclipboard = async (word) => {
    await window.navigator.clipboard.writeText(word);
    setTimeout(() => {
      setCopied(true);
    }, 0);
  };

  return (
    <div className="shortenin_results">
      <p className="shortenin_results_orig">{url}</p>
      <hr className="shortenin_results-line" />
      <div className="shortenin_results_new">
        <p className="shortenin_results_new-link">{newUrl}</p>
        <button
          className={`shortenin_results_new-clipboard cyan_btn ${
            copied ? "copied" : ""
          }`}
          onClick={() => {
            copytoclipboard(newUrl);
            setTimeout(() => setCopied(false), 1000);
          }}
        >
          {copied ? "copied!" : "copy"}
        </button>
      </div>
    </div>
  );
};

export default LinkComponent;

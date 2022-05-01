// import { useState } from "react";

const LinkComponent = ({ url }) => {
  const copytoclipboard = async (word) => {
    await window.navigator.clipboard.writeText(word);
    await this.classList.add("copied");
  };
  // const [clipboard, setClipboard] = useState('')

  return (
    <div className="shortenin_results">
      <p className="shortenin_results_orig">{url}</p>
      <hr className="shortenin_results-line" />
      <div className="shortenin_results_new">
        <p className="shortenin_results_new-link">http://bitly.com</p>
        <button
          className="shortenin_results_new-clipboard cyan_btn"
          onClick={() => {
            copytoclipboard("This is to be pasted in the clipboard");
          }}
        >
          copy
        </button>
      </div>
    </div>
  );
};

export default LinkComponent;

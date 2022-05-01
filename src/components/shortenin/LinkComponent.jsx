const LinkComponent = ({ url, newUrl }) => {
  const copytoclipboard = async (word) => {
    await window.navigator.clipboard.writeText(word);
  };

  return (
    <div className="shortenin_results">
      <p className="shortenin_results_orig">{url}</p>
      <hr className="shortenin_results-line" />
      <div className="shortenin_results_new">
        <p className="shortenin_results_new-link">{newUrl}</p>
        <button
          className="shortenin_results_new-clipboard cyan_btn"
          onClick={() => {
            copytoclipboard(newUrl);
          }}
        >
          copy
        </button>
      </div>
    </div>
  );
};

export default LinkComponent;

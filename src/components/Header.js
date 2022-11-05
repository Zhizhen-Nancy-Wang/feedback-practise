import PropTypes from "prop-types";
import React from "react";

function Header({ text, bgColor, textColor, reverse, setReverse }) {
  const changeMode = () => {
    setReverse((prev) => !prev);
  };
  return (
    <header>
      <div className="container " style={{ display: "flex" }}>
        <h2>{text}</h2>
        <button
          className="btn btn-primary"
          style={{ marginTop: "5px" }}
          onClick={changeMode}
        >
          {reverse ? "☾" : "☀︎"}
        </button>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: "Feedback UI",
  bgColor: "rgba(0,0,0,0.5)",
  color: "rgb(255,106,149)",
};

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Header;

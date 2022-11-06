import React, { useContext } from "react";
import { Route } from "react-router-dom";
import FeedbackContext from "../context/FeedbackContext";
import AboutIconLink from "../shared/AboutIconLink";

function Header({ text }) {
  const { reverse, setReverse } = useContext(FeedbackContext);

  const changeMode = () => {
    setReverse((prev) => !prev);
  };
  return (
    <header>
      <div className="container " style={{ display: "flex" }}>
        <h2 link="/">{text}</h2>

        <div>
          <div style={{ display: "flex" }}>
            <button
              className="btn btn-primary "
              style={{ marginTop: "5px" }}
              onClick={changeMode}
            >
              {reverse ? "☾" : "☀︎"}
            </button>
            <AboutIconLink />
          </div>
        </div>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: "Feedback UI",
  bgColor: "rgba(0,0,0,0.5)",
  color: "rgb(255,106,149)",
};

export default Header;

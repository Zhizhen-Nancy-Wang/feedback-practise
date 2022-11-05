import PropTypes from "prop-types";
import React from "react";

function Card({ children, reverse }) {
  //   return <div className={`card ${reverse && "reverse"}`}>{children}</div>;

  return (
    <div
      className="card"
      style={{
        backgroundColor: reverse ? " lightgrey" : "black",
        color: reverse ? "black" : "grey",
      }}
    >
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

export default Card;

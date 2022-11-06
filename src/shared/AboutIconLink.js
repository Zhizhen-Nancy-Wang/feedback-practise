import React from "react";
import { Link } from "react-router-dom";

function AboutIconLink() {
  return (
    <div>
      <Link to="/about">
        <button className="btn btn-primary" style={{ marginTop: "5px" }}>
          About
        </button>
      </Link>
    </div>
  );
}

export default AboutIconLink;

import React from "react";
import { Link } from "react-router-dom";
import Card from "../shared/Card";

function AboutPage({ reverse }) {
  return (
    <Card reverse={reverse}>
      <div>hello</div>
      <Link to="/" style={{ color: "purple" }}>
        Back to Home
      </Link>
    </Card>
  );
}

export default AboutPage;

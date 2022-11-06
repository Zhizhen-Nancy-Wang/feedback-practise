import React, { useContext } from "react";
import { Link } from "react-router-dom";
import FeedbackContext from "../context/FeedbackContext";
import Card from "../shared/Card";

function AboutPage() {
  const { reverse } = useContext(FeedbackContext);
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

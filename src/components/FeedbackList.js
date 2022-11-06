import React, { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import FeedbackItem from "./FeedbackItem";

function FeedbackList() {
  const { reverse, feedback } = useContext(FeedbackContext);

  if (!feedback || feedback.length === 0) {
    return <p>no feedback yet</p>;
  }

  return (
    <div className="feedback-list">
      {feedback.map((item, index) => {
        return (
          <div key={index}>
            <FeedbackItem reverse={reverse} item={item} id={item.id} />
          </div>
        );
      })}
    </div>
  );
}

export default FeedbackList;

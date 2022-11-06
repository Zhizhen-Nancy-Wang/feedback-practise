import PropTypes from "prop-types";
import React from "react";
import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedback, deleteFeedback, reverse }) {
  if (!feedback || feedback.length === 0) {
    return <p>no feedback yet</p>;
  }

  return (
    <div className="feedback-list">
      {feedback.map((item, index) => {
        return (
          <div key={index}>
            <FeedbackItem
              reverse={reverse}
              item={item}
              id={item.id}
              deleteFeedback={deleteFeedback}
            />
          </div>
        );
      })}
    </div>
  );
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      rating: PropTypes.number,
      text: PropTypes.string,
    })
  ),
  deleteFeedback: PropTypes.func.isRequired,
  reverse: PropTypes.bool.isRequired,
};

export default FeedbackList;

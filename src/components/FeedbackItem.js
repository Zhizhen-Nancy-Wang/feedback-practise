// import { faTimes } from "./react-icons/fa";
import PropsTypes from "prop-types";
import React from "react";
import Card from "../shared/Card";

function FeedbackItem({ item, deleteFeedback, reverse }) {
  const { id, text, rating } = item;

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete?")) {
      deleteFeedback(id);
    }
  };

  return (
    <Card reverse={reverse}>
      <div className="num-display">{rating}</div>
      <button className="close" onClick={handleDelete}>
        ✖️
      </button>
      <div className="text-display">{text}</div>
    </Card>
  );
}

FeedbackItem.propsTypes = {
  item: PropsTypes.object.isRequired,
  reverse: PropsTypes.bool,
  deleteFeedback: PropsTypes.func.isRequired,
};

export default FeedbackItem;

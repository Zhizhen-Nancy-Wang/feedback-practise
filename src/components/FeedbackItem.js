// import { faTimes } from "./react-icons/fa";
import React, { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import Card from "../shared/Card";

function FeedbackItem({ item }) {
  const { deleteFeedback, reverse, editFeedback } = useContext(FeedbackContext);
  const { id, text, rating } = item;

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete?")) {
      deleteFeedback(id);
    }
  };

  return (
    <Card reverse={reverse}>
      <div className="num-display">{rating}</div>
      <button className="close btn" onClick={handleDelete}>
        delete
      </button>
      <button className="edit btn" onClick={() => editFeedback(item)}>
        edit
      </button>
      <div className="text-display">{text}</div>
    </Card>
  );
}

export default FeedbackItem;

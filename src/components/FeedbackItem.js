// import { faTimes } from "./react-icons/fa";
import React, { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import Card from "../shared/Card";

function FeedbackItem({ item }) {
  const { deleteFeedback, reverse } = useContext(FeedbackContext);
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

export default FeedbackItem;

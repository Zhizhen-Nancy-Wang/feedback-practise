import React, { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

export default function DeleteAllBtn() {
  const { feedback, setFeedback } = useContext(FeedbackContext);

  const deleteAll = () => {
    if (window.confirm("Are you sure you want to delete all?")) {
      setFeedback([]);
    }
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {feedback.length ? (
        <button className="btn btn-secondary" onClick={deleteAll}>
          Delete All
        </button>
      ) : (
        <button
          className="btn btn-secondary"
          onClick={() => window.location.reload()}
        >
          Refresh Page
        </button>
      )}
    </div>
  );
}

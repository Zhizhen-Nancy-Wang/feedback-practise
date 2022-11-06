import React from "react";

export default function DeleteAll({ feedback, setFeedback }) {
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

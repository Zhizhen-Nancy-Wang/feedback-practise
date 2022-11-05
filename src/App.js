import React from "react";
import {
  BrowserRouter as Route,
  Router,
  RouterProvider,
} from "react-router-dom";
import { useState } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import AboutPages from "./pages/AboutPages";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const [reverse, setReverse] = useState(false);

  const deleteFeedback = (id) => {
    const newArray = feedback.filter((item) => item.id !== id);
    setFeedback(newArray);
  };
  const deleteAll = () => {
    if (window.confirm("Are you sure you want to delete all?")) {
      setFeedback([]);
    }
  };

  const addFeedback = (newObj) => {
    setFeedback([newObj, ...feedback]);
  };

  return (
    <div className="App">
      <Header setReverse={setReverse} reverse={reverse} />
      <div className="container">
        <FeedbackForm addFeedback={addFeedback} reverse={reverse} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList
          feedback={feedback}
          deleteFeedback={deleteFeedback}
          reverse={reverse}
        />
      </div>
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
    </div>
  );
}

export default App;

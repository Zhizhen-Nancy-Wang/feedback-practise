import React from "react";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { useState } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import AboutPage from "./pages/AboutPage";
import DeleteAll from "./components/DeleteAll";
import AboutIconLink from "./shared/AboutIconLink";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const [reverse, setReverse] = useState(false);

  const deleteFeedback = (id) => {
    const newArray = feedback.filter((item) => item.id !== id);
    setFeedback(newArray);
  };

  const addFeedback = (newObj) => {
    setFeedback([newObj, ...feedback]);
  };

  return (
    <Router>
      <Header setReverse={setReverse} reverse={reverse} />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedbackForm addFeedback={addFeedback} reverse={reverse} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList
                  feedback={feedback}
                  deleteFeedback={deleteFeedback}
                  reverse={reverse}
                />
                <DeleteAll feedback={feedback} setFeedback={setFeedback} />
              </>
            }
          ></Route>
          <Route path="/about" element={<AboutPage reverse={reverse} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

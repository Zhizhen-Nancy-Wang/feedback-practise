import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
import Card from "../shared/Card";
import FeedbackRating from "./FeedbackRating";
import Button from "../shared/Button";

function FeedbackForm({ addFeedback, reverse }) {
  const [rating, setRating] = useState(10);
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text && text.trim().length < 2) {
      setMessage("Review needs to be at least 3 characters");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length >= 3) {
      const newObj = {
        rating: rating,
        text: text,
        id: uuidv4(),
      };
      addFeedback(newObj);
      setText("");
      setRating(10);
    }
  };

  return (
    <Card reverse={reverse}>
      <form onSubmit={handleSubmit}>
        <h2> How would you rate your service with us?</h2>
        <FeedbackRating rating={rating} setRating={setRating} />
        <div className="input-group">
          <input
            type="text"
            placeholder="Write your review"
            onChange={handleChange}
            value={text}
          />
          <Button type="submit" version="secondary" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
      </form>
      {message && <div className="message">{message}</div>}
    </Card>
  );
}

export default FeedbackForm;

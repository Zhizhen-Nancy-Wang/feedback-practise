import { v4 as uuidv4 } from "uuid";
import { createContext, useState } from "react";
import React from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [reverse, setReverse] = useState(false);
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This a text 1",
      rating: 10,
    },
    {
      id: 2,
      text: "This a text 2",
      rating: 9,
    },
    {
      id: 3,
      text: "This a text 3",
      rating: 8,
    },
  ]);

  const deleteFeedback = (id) => {
    const newArray = feedback.filter((item) => item.id !== id);
    setFeedback(newArray);
  };

  const addFeedback = (newObj) => {
    newObj.id = uuidv4();
    setFeedback([newObj, ...feedback]);
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        setFeedback,
        addFeedback,
        reverse,
        setReverse,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;

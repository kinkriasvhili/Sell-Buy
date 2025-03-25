import { createContext, useState } from "react";

const ReviewContext = createContext();

export function ReviewContextProvider({ children }) {
  const [review, setReview] = useState(null);
  return (
    <ReviewContext.Provider value={{ review, setReview }}>
      {children}
    </ReviewContext.Provider>
  );
}

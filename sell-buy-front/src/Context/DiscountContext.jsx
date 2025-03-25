import { createContext, useState } from "react";

const DiscountContext = createContext();

export function DiscountContextProvider({ children }) {
  const [discount, setDiscount] = useState(null);

  return (
    <DiscountContext.Provider value={{ discount, setDiscount }}>
      {children}
    </DiscountContext.Provider>
  );
}

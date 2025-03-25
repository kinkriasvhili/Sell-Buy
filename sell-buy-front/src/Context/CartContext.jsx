import { createContext, useState } from "react";

const CartContext = createContext();

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState(null);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}

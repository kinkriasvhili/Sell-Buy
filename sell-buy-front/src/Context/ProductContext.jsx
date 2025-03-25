import { createContext, useState } from "react";

const ProductContext = createContext();

export function ProductContextProvider({ children }) {
  const [products, setProduct] = useState();
  return (
    <ProductContext.Provider value={{ products, setProduct }}>
      {children}
    </ProductContext.Provider>
  );
}

import { createContext, useState } from "react";

const FavoriteContext = createContext();

export function FavoriteContextProvider({ children }) {
  const [favorites, setFavorites] = useState(null);
  return (
    <FavoriteContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoriteContext.Provider>
  );
}

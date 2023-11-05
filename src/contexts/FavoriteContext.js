import { createContext, useContext, useState, useEffect } from "react";

export const FavoriteContext = createContext();

export const useFavorite = () => {
  return useContext(FavoriteContext);
};

export const FavoriteProvider = ({ children }) => {
  const [favoriteItems, setFavoriteItems] = useState([]);

  useEffect(() => {
    // You can load favorites from local storage or an API here
    const savedFavorites = JSON.parse(localStorage.getItem("favoriteItems"));
    if (Array.isArray(savedFavorites)) {
      setFavoriteItems(savedFavorites);
    }
  }, []);

  const addToFavorites = (id) => {
    if (!favoriteItems.includes(id)) {
      setFavoriteItems([...favoriteItems, id]);
      localStorage.setItem(
        "favoriteItems",
        JSON.stringify([...favoriteItems, id])
      );
    }
  };

  const removeFromFavorites = (id) => {
    const newFavorites = favoriteItems.filter(
      (favoriteId) => favoriteId !== id
    );
    setFavoriteItems(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  return (
    <FavoriteContext.Provider
      value={{
        favoriteItems,
        addToFavorites,
        removeFromFavorites,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

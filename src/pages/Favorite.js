import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { FavoriteContext } from "../contexts/FavoriteContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons"; // Import the cross (x) icon
import Product from "../components/Product";
const Favorite = () => {
  const { favoriteItems, removeFromFavorites } = useContext(FavoriteContext);

  return (
    <div className="pt-32 pb-12  py-32 min-h-screen flex items-center justify-center">
      <div className="container mx-auto">
        {" "}
        {/* Add a container to the content */}
        <h1 className="text-2xl pb-10 font-semibold mb-4 text-center">
          Your Favorite Items
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {favoriteItems.map((favoriteItem) => (
            <div
              className="w-full h-[350px] bg-white-200 mb-4"
              key={favoriteItem.id}
            >
              <Product key={favoriteItem.id} product={favoriteItem} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorite;

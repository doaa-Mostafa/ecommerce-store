import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { FavoriteContext } from "../contexts/FavoriteContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons"; // Import the cross (x) icon

const Favorite = () => {
  const { favoriteItems, removeFromFavorites } = useContext(FavoriteContext);

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex justify-center items-center m-10">
      <div>
        <h1 className="text-2xl font-semibold mb-4 text-center">
          Your Favorite Items
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {favoriteItems.map((favoriteItem) => (
            <div
              key={favoriteItem.id}
              className="relative bg-white border border-gray-200 rounded-lg shadow-lg"
            >
              <button
                onClick={() => removeFromFavorites(favoriteItem.id)} // Remove the item from favorites
                className="absolute top-2 right-2 cursor-pointer text-gray-500 hover:text-red-500"
              >
                <FontAwesomeIcon
                  icon={faTimes}
                  className="text-lg absolute bg-black"
                />{" "}
                {/* Cross (x) icon */}
              </button>
              <Link to={`/product/${favoriteItem.id}`} className="block">
                <div className="flex items-center justify-center h-36 sm:h-48 rounded-t-lg">
                  <img
                    src={favoriteItem.image}
                    alt={favoriteItem.title}
                    className="w-36 sm:w-48 h-36 sm:h-48"
                  />
                </div>
                <div className="p-4">
                  <p className="text-lg font-semibold mb-2">
                    {favoriteItem.title}
                  </p>
                  <p className="text-orange-500 text-xl">
                    ${favoriteItem.price}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorite;

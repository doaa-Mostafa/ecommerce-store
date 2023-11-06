import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import {
  faHeart as faHeartSolid,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../contexts/CartContext";
import { FavoriteContext } from "../contexts/FavoriteContext";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { addToFavorites, removeFromFavorites } = useContext(FavoriteContext);
  const { id, image, category, title, price } = product;
  const productName = title.substring(0, 12);
  const [isFavorite, setIsFavorite] = useState(false);

  var numberString = price.toString();
  var parts = numberString.split(".");
  var integerPrice = parts[0];
  var decimalPrice = parts[1];

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFromFavorites(product, id);
    } else {
      addToFavorites(product);
    }
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    // Load isFavorite state from local storage
    const storedIsFavorite = localStorage.getItem(`favorite_${id}`);
    if (storedIsFavorite === "true") {
      setIsFavorite(true);
    }
  }, [id]);

  useEffect(() => {
    // Update local storage when isFavorite changes
    localStorage.setItem(`favorite_${id}`, isFavorite);
  }, [id, isFavorite]);

  return (
    <div>
      <div className="bg-white rounded-lg shadow-lg h-[360px] mb-4 relative overflow-hidden group transition p-4">
        <div className="w-full h-[75%] flex justify-center items-center">
          <div className="w-[250px] mx-auto flex justify-center items-center">
            <Link to={`/product/${id}`}>
              <img
                className="max-h-[200px] group-hover:scale-110 transition duration-300"
                src={image}
                alt={productName}
              />
            </Link>

            <button
              onClick={toggleFavorite}
              className="absolute top-0 right-0 w-10 h-10 flex justify-center items-center"
            >
              <FontAwesomeIcon
                icon={isFavorite ? faHeartSolid : faHeart}
                className={`text-2xl ${
                  isFavorite ? "text-orange-500" : "text-gray-300"
                }`}
              />
            </button>
          </div>
        </div>

        <button onClick={() => addToCart(product, id)}>
          <div className="absolute right-0 bottom-0  w-12 h-12 flex justify-center items-center hover:shadow-lg hover:rounded-full hover:scale-110">
            <FontAwesomeIcon
              icon={faCartArrowDown}
              className="text-3xl text-orange-500"
            />
          </div>
        </button>
        <div className="absolute bottom-0">
          <h2 className="text-orange-500 mb-0">{productName}</h2>
          <div className="flex">
            <span className="text-sm">$</span>
            <h2 className="text-2xl">{integerPrice}</h2>
            <span className="text-sm">{decimalPrice}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

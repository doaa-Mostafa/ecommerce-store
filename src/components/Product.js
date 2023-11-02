import React, { useContext ,useState} from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import {  BsHeart } from "react-icons/bs"; // Import the heart icon
import { CartContext } from "../contexts/CartContext";


const Product = ({ product }) => {
  const {addToCart} = useContext(CartContext)
  const { id, image, category, title, price } = product;
  const productName = title.substring(0,12)
  const [isFavorite, setIsFavorite] = useState(false); // State to track favorite status
  
  var numberString = price.toString(); // Convert the number to a string
  var parts = numberString.split('.');
  var integerPrice = parts[0];
  var decimalPrice = parts[1];
    // Function to toggle favorite status
    const toggleFavorite = () => {
      setIsFavorite(!isFavorite);
    };

  return (
    <div>
      <div className="bg-white rounded-lg shadow-lg h-[360px] mb-4 relative overflow-hidden group transition p-4">
       
          {/* Link to the product details page */}
          <div className="w-full h-[75%] flex justify-center items-center">
            <div className="w-[250px] mx-auto flex justify-center items-center">
            <Link to={`/product/${id}`}>
              <img
                className="max-h-[200px] group-hover:scale-110 transition duration-300"
                src={image}
                alt={productName}
              />
                 </Link>
            
               {/* Heart icon for adding to favorites */}
               <button onClick={toggleFavorite} className="absolute top-0 right-0 w-10 h-10 flex justify-center items-center">
                <BsHeart className={`text-2xl ${isFavorite ? 'text-orange-500' : 'text-gray-300'}`} />
              </button>
            </div>
          </div>
     

        {/* buttons */}
        <button onClick={()=>addToCart( product,id)}>
          <div className="absolute right-0 bottom-0 text-orange-500 w-12 h-12 flex justify-center items-center hover:shadow-lg hover:rounded-full hover:scale-110">
            <FiShoppingCart  className="text-3xl" />
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

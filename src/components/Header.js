import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faUser,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu
  const { itemAmount } = useContext(CartContext);
  const { products } = useContext(ProductContext);
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  const categories = [...new Set(products.map((product) => product.category))];

  const handleCategory = (category) => {
    setCategory(category);
    navigate(`/category/${category}`);
  };
  const handleMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  }, []);

  return (
    <header
      className={`p-5 ${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed w-full z-10 transition-all`}
    >
      <div className="container mx-auto flex items-center justify-between h-full ">
        <div className="md:hidden ">
          {" "}
          {/* Show on small screens */}
          <button onClick={() => handleMenuClick()} className="text-2xl">
            &#9776; {/* Hamburger menu icon */}
          </button>
        </div>
        <div>
          <Link to={"/"}>
            <span className="hidden md:block uppercase font-bold text-[17px] text-gray-700 hover:text-orange-500">
              Home
            </span>{" "}
            {/* Hide on small screens */}
          </Link>
        </div>
        <div className="hidden md:flex">
          {" "}
          {/* Show on medium and larger screens */}
          <div className="flex flex-wrap justify-center items-center cursor-pointer">
            {categories.map((category) => (
              <div
                key={category}
                className="uppercase font-bold text-[17px] text-gray-700 p-2 m-2 hover:text-orange-500 "
                onClick={() => handleCategory(category)}
              >
                {category}
              </div>
            ))}
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden fixed top-14 left-0 h-[340px] w-full bg-white transition-all">
            <div className="flex flex-col p-4  ">
              <Link
                className="mb-5 p-2 border-b-2 text-orange-500 font-bold"
                to="/"
              >
                Home
              </Link>

              {categories.map((category) => (
                <Link
                  className="mb-5 p-2  border-b-2"
                  key={category}
                  to={`/category/${category}`}
                  onClick={() => setIsMobileMenuOpen(false)} // Close the sidebar on link click
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="cursor-pointer flex relative">
          <Link to={"/login"}>
            {" "}
            {/* Add the login link */}
            <FontAwesomeIcon
              icon={faUser}
              className="text-2xl ml-4 text-gray-400 mr-5"
            />
          </Link>
          <Link to={"/favorite"}>
            <FontAwesomeIcon
              icon={faHeart}
              className="text-2xl mr-4 text-gray-400"
            />
          </Link>
          <Link to={"/cart"}>
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="text-2xl  text-gray-400"
            />
            <div className="bg-orange-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
              {itemAmount}
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

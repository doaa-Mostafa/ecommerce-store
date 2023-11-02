import React, { useContext, useEffect, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { BsHeart } from "react-icons/bs"; // Import the heart icon
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { itemAmount } = useContext(CartContext);

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
      <div className="container mx-auto flex items-center justify-between h-full">
        <Link to={"/"}>
          <div>
            <img className="w-[40px]" src={"logo.png"} alt="logo" />
          </div>
        </Link>

        <div className="cursor-pointer flex relative">
          <Link to={"/favorite"}>
            <div>
              <BsHeart className="text-2xl mr-4 text-gray-700" />
            </div>
          </Link>
          <Link to={"/cart"}>
            <FiShoppingCart className="text-2xl" />
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

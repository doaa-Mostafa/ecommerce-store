import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";

const FilterCategory = () => {
  const { products } = useContext(ProductContext);
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  const categories = [...new Set(products.map((product) => product.category))];

  const handleCategory = (category) => {
    setCategory(category);
    navigate(`/category/${category}`);
  };

  return (
    <div className="flex flex-wrap justify-center items-center cursor-pointer">
      {categories.map((category) => (
        <div
          key={category}
          className="uppercase font-bold text-[17px] text-gray-700 p-2 m-2  hover:text-orange-500"
          onClick={() => handleCategory(category)}
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default FilterCategory;

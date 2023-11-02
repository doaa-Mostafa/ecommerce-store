import React, { useContext, useState } from "react";
import { ProductContext } from "../contexts/ProductContext";

const FilterCategory = ({setCategory}) => {
    const { products } = useContext(ProductContext);

  // Extract unique categories from products
 
   const categories = [...new Set(products.map((product) => product.category))];
   const handleCategory = (category) => {
    setCategory(category)
  };

  return (
    <div className="flex flex-wrap justify-center items-center cursor-pointer">
      {categories.map((category) => (
        <div
          key={category}
          className="bg-orange-400 rounded-md  text-[20px] text-white p-2 m-2"
          onClick={() => handleCategory(category)}
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default FilterCategory

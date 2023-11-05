// CategoryPage.js
import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { useParams } from "react-router-dom";
import Product from "../components/Product";

const Category = () => {
  const { products } = useContext(ProductContext);
  const { categoryName } = useParams(); // Get the category name from the URL

  // Filter products by the category name
  const filteredProducts = products.filter(
    (product) => product.category === categoryName
  );

  return (
    <div className="mt-10 ">
      <div className=" flex justify-center items-center ">
        <section className="py-16">
          <div className="container mx-auto">
            <div className=" m-5 flex justify-center items-center  ">
              <div className="font-bold text-2xl uppercase text-gray-800 p-5 group relative">
                {categoryName}
              </div>
            </div>
            <div
              className="grid grid-cols-1 md:grid-cols-2
          lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm
          mx-auto md:max-w-none md:mx-0"
            >
              {filteredProducts.map((product) => {
                return (
                  <div
                    className="w-full h-[350px] bg-white-200 mb-4"
                    key={product.id}
                  >
                    <Product key={product.id} product={product} />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Category;

import React, { useContext, useState } from "react";
import Product from "../components/Product";
import { ProductContext } from "../contexts/ProductContext";
import Hero from "../components/Hero";
const Home = () => {
  const { products } = useContext(ProductContext);

  // Filter products based on the selected category

  return (
    <div>
      <div className=" mt-10">
        <Hero />
      </div>
      <div className=" flex justify-center items-center "></div>
      <section className="py-16">
        <div className="container mx-auto">
          <div
            className="grid grid-cols-1 md:grid-cols-2
          lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm
          mx-auto md:max-w-none md:mx-0"
          >
            {products.map((product) => {
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
  );
};

export default Home;

import React, { useContext, useState } from "react";
import Product from '../components/Product'
import { ProductContext } from "../contexts/ProductContext";
import FilterCategory from "../components/FilterCategory";
import Hero from "../components/Hero";
const Home = () => {
  const { products } = useContext(ProductContext);
  const [category,setCategory]=useState('')

  const filteredProducts = category
  ? products.filter((item) => item.category === category)
  : products;



  return (
    <div className=" ">
      <div className=" ">
      <Hero/>
      </div>
      <div className=" flex justify-center items-center ">
      <FilterCategory setCategory={setCategory}/>
      </div>
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2
          lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm
          mx-auto md:max-w-none md:mx-0">
            {filteredProducts.map((product) => {
              return (
                <div
                  className="w-full h-[350px] bg-white-200 mb-4"
                  key={product.id}
                >
                 <Product key={product.id} product={product}/>
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

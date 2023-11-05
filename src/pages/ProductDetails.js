import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const product = products.find((item) => {
    return item.id === parseInt(id);
  });
  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading...
      </section>
    );
  }
  const { title, price, description, image } = product;
  console.log(product);
  return (
    <div>
      <section className="lg:pt-32 pb-12 lg:py-32 min-h-screen flex items-center justify-center">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="flex flex-1 justify-center items-center lg:mb-8">
              <div className="p-20">
                <img
                  className="max-w-[200px] lg:max-w-[300px] shadow-lg p-2 rounded-lg"
                  src={image}
                />
              </div>
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
                {title}
              </h1>
              <div className="text-xl text-orange-600 font-medium mb-6">
                ${price}
              </div>
              <p className="mb-8">{description}</p>
              <button
                onClick={() => addToCart(product, product.id)}
                className="bg-primary py-4 px-8 text-white rounded-md"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;

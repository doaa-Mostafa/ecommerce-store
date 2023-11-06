import React, { useContext,useEffect } from "react";
import { ProductContext } from "../contexts/ProductContext";
import CartItem from "../components/CartItem";
import { CartContext } from "../contexts/CartContext";

const Cart = () => {
  const { cart, clearCart, total } = useContext(CartContext);

 
  // Function to handle the checkout action
  const handleCheckout = () => {
    // You can add your checkout logic here
    // For example, you can redirect the user to a payment page or process the order.
    // This function depends on your specific implementation.
  };

  return (
    <div className="mt-20 flex justify-center items-center">
      <div className="w-full max-w-screen-md p-8">
        {cart.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-lg p-4 mb-4 flex justify-between items-center"
          >
            <CartItem item={item} />
          </div>
        ))}
        <div className="flex justify-between items-center mt-8">
          <div className="font-semibold text-lg">
            <span>Total:</span> $ {parseFloat(total).toFixed(2)}
          </div>
          <button
            onClick={clearCart}
            className="uppercase rounded-md cursor-pointer p-2 bg-black text-white text-lg hover:bg-gray-800 mr-4"
          >
            Clear Cart
          </button>
       
        </div>
        <button
            onClick={handleCheckout}
            className=" uppercase w-full  mt-10 rounded-md cursor-pointer p-3 bg-orange-300  text-lg hover:bg-orange-400"
          >
            Checkout
          </button>
      </div>
    </div>
  );
};

export default Cart;

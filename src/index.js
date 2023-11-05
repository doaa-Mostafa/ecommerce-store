import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ProductProvider from "./contexts/ProductContext";
import CartProvider from "./contexts/CartContext";
import { FavoriteProvider } from "./contexts/FavoriteContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FavoriteProvider>
    <CartProvider>
      <ProductProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ProductProvider>
    </CartProvider>
  </FavoriteProvider>
);

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import Favorite from "./pages/Favorite";
import ScrollToTop from "./components/ScrollToTop";
import Category from "./pages/Category";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Router>
        <ScrollToTop />{" "}
        {/* This component ensures scrolling to the top on route changes */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryName" element={<Category />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;

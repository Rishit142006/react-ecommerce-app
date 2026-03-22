import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import ProductList from "./Components/ProductList";
import ProductDetail from "./Components/ProductDetail";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>

        <div className="header">
          <h2>My E-Commerce Store</h2>
          <Link to="/">Home</Link> | 
          <Link to="/cart"> Cart</Link>
        </div>

        <div className="container">
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>

      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
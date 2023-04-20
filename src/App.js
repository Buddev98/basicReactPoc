import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Breadcrumbs from "./components/Breadcrumbs";
import ProductList from "./components/ProductList";
import ProductDetails from "./Pages/ProductDetails";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Breadcrumbs />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/product/:productId" element={<ProductDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

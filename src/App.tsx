import React from "react";
import "./styles/App.scss";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="o-nama" element={<AboutPage />} />
        <Route path="proizvodi" element={<ProductsPage />} />
        <Route path="proizvodi/:id" element={<ProductPage />} />
        <Route path="kontakt" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

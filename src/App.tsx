import React from "react";
import "./styles/App.scss";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";
import ProductPage from "./pages/ProductPage";
import { CSSTransition } from "react-transition-group";

function App() {
  let location = useLocation();

  return (
    <div className="App">
      <Navbar />
      <CSSTransition key={location.pathname} classNames="fade" timeout={300}>
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="o-nama" element={<AboutPage />} />
          <Route path="proizvodi" element={<ProductsPage />} />
          <Route path="proizvodi/:id" element={<ProductPage />} />
          <Route path="kontakt" element={<ContactPage />} />
        </Routes>
      </CSSTransition>

      <Footer />
    </div>
  );
}

export default App;

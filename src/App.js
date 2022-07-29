import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "../src/components/pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/services" exact element={<Services />} />
          <Route path="/products" exact element={<Products />} />
          <Route path="/sign-up" exact element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

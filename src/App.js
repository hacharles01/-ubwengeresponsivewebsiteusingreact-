import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home"; // your components
import About from "./Components/About";
import Contact from "./Components/Contact";
import Services from "./Components/Services";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/services" element={<Services />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;

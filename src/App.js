import React from "react";

import Navbar from "./components/navbar";

import Home from "./views/home";
import Portfolio from "./views/portfolio";
import Curriculum from "./views/curriculum";
import Contact from "./views/contact";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path="/" index element={<Home/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="/cv" element={<Curriculum/>}/>
          <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
    );
}

export default App;

import React from "react";

import Navbar from "./components/navbar";
import DevIcons from "./components/dev-icons";

import Home from "./views/home";
import Portfolio from "./views/portfolio";
import Curriculum from "./views/curriculum";
import Contact from "./views/contact";
import ErrorPage from "./views/error-page";
import Home2 from "./views/home-2";


import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <DevIcons/>
      <Navbar/>
      <Routes>
          <Route path="/" index element={<Home2/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="/cv" element={<Curriculum/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
    );
}

export default App;

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Header from '../src/Components/Header'

import Home from "./Components/Home";
import Product from "./Components/Product";
import Contact from "./Components/Contact";
import Blog from "./Components/Blog";

export default function App() {
  
    return (
      <div>
        
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
            <Route path="product" element={<Product />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </div>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

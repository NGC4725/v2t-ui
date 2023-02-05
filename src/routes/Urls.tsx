import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Contact } from "../pages/Contact";
import { Home } from "../pages/Home";

export const Urls = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

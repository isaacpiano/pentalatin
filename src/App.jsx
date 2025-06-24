import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./Home";
import Scores from "./Scores";
import Explore from "./Explore";
import Contact from "./Contact";
import Donate from "./Donate";

export default function App() {
  return (
    <Router>
      <nav className="bg-red-700 text-white p-4 flex justify-center space-x-4">
        <Link to="/">Inicio</Link>
        <Link to="/scores">Catálogo</Link>
        <Link to="/explore">Explorar</Link>
        <Link to="/contact">Contacto</Link>
        <Link to="/donate">Donar</Link>
      </nav>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/scores" element={<Scores />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
    
      </Routes>
    </Router>
  );
}
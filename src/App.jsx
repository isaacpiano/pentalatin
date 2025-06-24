import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Scores from './Scores';
import Admin from './Admin';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scores" element={<Scores />} />
<Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

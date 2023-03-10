import React from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from './components/Contact';
import Resume from './components/Resume';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
            <Route path="/" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
      <Footer />

  </Router>
  );
}

export default App;

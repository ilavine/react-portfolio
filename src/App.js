import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <Navbar />
      <About />
      <Footer />
  </Router>
  );
}

export default App;

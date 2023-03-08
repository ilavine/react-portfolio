import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navigation />
      <About />
      <Footer />
  </Router>
  );
}

export default App;

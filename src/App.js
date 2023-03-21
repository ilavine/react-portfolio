import React from "react";
import "./App.css";
import { HashRouter as Router, Routes } from "react-router-dom";
import Banner from "./components/Banner";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import ProjectMap from "./components/ProjectMap";

function App() {
  return (
    <Router>
      <Banner />
      <About />
      <Routes>
      </Routes>
      <ProjectMap />
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;

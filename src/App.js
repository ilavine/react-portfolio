import React from "react";
import "./App.css";
import { HashRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import About from "./components/About/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import ProjectMap from "./components/ProjectMap";

function App() {
  return (
    <Router>
      <Header />
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

import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HashRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import About from "./pages/Home/About";
import Footer from "./components/Footer/Footer";
import Contact from "./components/ContactForm/Contact";
import ProjectMap from "./components/Projects/ProjectMap";

function App() {
  return (
    <Router>
      <Header />
        <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/questionnaire" element={<Questionnaire />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/questionnaire" element={<Questionnaire/>} />
              <Route path="/matches" element={<Matches/>} />
              <Route path="/profile/:userId" element={<Profile />} />
              <Route path="/about" element={<AboutMe />} />
              <Route path="/about" element={<Directory />} />
          </Routes>
      <Footer />
    </Router>
  );
}

export default App;

import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from './components/Contact';
import Resume from './components/Resume';


function App() {
  return (
    <Router>
      <Navbar />
      {/* <Route exact path="/" component={About}></Route> */}
      {/* <Route path="/about" component={About}></Route> */}
      {/* <Route path="/portfolio" component={Portfolio}></Route> */}
      {/* <Route path="/portfolio" component={Contact}></Route> */}
      {/* <Route path="/portfolio" component={Resume}></Route> */}
      <About />
      <Footer />

  </Router>
  );
}

export default App;

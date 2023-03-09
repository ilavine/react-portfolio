import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Navbar() {
    return (
        <div class="container">
            <header class="d-flex flex-wrap justify-content-end py-3 mb-4 border-bottom">
                <ul class="nav nav-pills">
                    <li class="nav-item"><a href="#About" class="nav-link active" aria-current="page">About</a></li>
                    <li class="nav-item"><a href="#Portfolio" class="nav-link">Portfolio</a></li>
                    <li class="nav-item"><a href="#Contact" class="nav-link">Contact Me</a></li>
                    <li class="nav-item"><a href="#Resumes" class="nav-link">Resume</a></li>
                </ul>
            </header>
      </div>
    );
}
    
    
  
  export default Navbar;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Navbar() {
    return (
        <header class="p-3 text-bg-dark">
            <div class="container">
                <div class="d-flex flex-wrap align-items-center justify-content-end justify-content-lg-end">
                    <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="#About" class="nav-link px-2 text-white">About</a></li>
                        <li><a href="#Portfolio" class="nav-link px-2 text-white">Portfolio</a></li>
                        <li><a href="#Contact" class="nav-link px-2 text-white">Contact</a></li>
                        <li><a href="#Resume" class="nav-link px-2 text-white">Resume</a></li>
                    </ul>
                </div>
            </div>
        </header>
    );
}
    
    
  
  export default Navbar;
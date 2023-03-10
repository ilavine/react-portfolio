import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function Navbar() {
    return (
        <div class="container">
            <header class="d-flex flex-wrap justify-content-end py-3 mb-4 border-bottom">
                <ul class="nav nav-pills">
                    <li><Link to={'/'} class="nav-link"> About </Link></li>
                    <li><Link to={'/contact'} class="nav-link">Contact Me</Link></li>
                    <li><Link to={'/resume'} class="nav-link">Resume</Link></li>
                </ul>
            </header>
      </div>
    );
}
    
    
  
  export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function Navbar() {
    return (
        <nav class="navbar navbar-light justify-content-end border-bottom">
                <ul class="nav nav-pills">
                    <li class="nav-link"><Link to={'/'}> About </Link></li>
                    <li  class="nav-link"><Link to={'/resume'}>Resume</Link></li>
                    <li class="nav-link"><Link to={'/contact'} >Contact Me</Link></li>
                </ul>
      </nav>
    );
}
    
    
  
  export default Navbar;
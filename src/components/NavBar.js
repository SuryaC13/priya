import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';


function NavBar(){
  return(
 <div id="nav">   
  <nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <div class="container-fluid">
    <h1 id="nav1">Portfolio </h1>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-label="Toggle navigation" id="menu">
      <FaBars class="navbar-toggler-icon" id="menu1"/>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link to="/" class="nav-link"><li>Home</li></Link>   
        <Link to="/skills" class="nav-link"><li>Skills</li></Link>                                                              
        <Link to="/projects" class="nav-link"><li>Projects</li></Link> 
        <Link to="/about" class="nav-link"><li>About</li></Link>
      </div>
    </div>
  </div>
</nav>
</div>
     
   );
}

export default NavBar; 
      
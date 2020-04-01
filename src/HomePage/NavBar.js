import React from 'react';
import './Styles/NavBarStyle.css';

const NavBar=()=>{
return(
  <div className='NavBarStyle'>
    <nav>
      <div className="logo">
        <h1>
          Manage Mart
        </h1>
      </div>

      <div className="menu">
        <a href="/">Home</a>
        <a href="/About">About</a>
        <a href="/Contacts">Contact</a>
        <a href="/Services">Services</a>
      </div>
    </nav>
  </div>
    
)
}

export default NavBar;
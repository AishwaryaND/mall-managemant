import React from 'react';
import { NavLink} from 'react-router-dom';
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
        <NavLink to="/">Home</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/Contact">Contact</NavLink>
        <NavLink to="/Services">Services</NavLink>
        <NavLink to='/Login'>Login</NavLink>
      </div>
    </nav>
  </div>
    
)
}

export default NavBar;
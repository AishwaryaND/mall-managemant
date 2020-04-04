import React from 'react';
import { NavLink} from 'react-router-dom';
import './Styles/NavBarStyle.css';

class NavBar extends React.Component{
  constructor() {
    super();
    this.state = {
      isButtonSelected: 'home',
      
    };
  }


  setActive(){
    this.setState({ isButtonSelected: 'nothome' });
  }

  render(){
    return(
      <div className='NavBarStyle'>
        <nav>
          <div className="logo">
            <h1>
              Manage Mart
            </h1>
          </div>
    
          <div className="menu">
            <NavLink className={`${this.state.isButtonSelected === 'home'? 'active' : 'inactive'}`} to="/">Home</NavLink>
            <NavLink onClick={() => this.setActive()} to="/About">About</NavLink>
            <NavLink  onClick={() => this.setActive()} to="/Contact">Contact</NavLink>
            <NavLink onClick={() => this.setActive()} to="/Services">Services</NavLink>
            <NavLink onClick={() => this.setActive()} to='/Login'>Login</NavLink>
          </div>
        </nav>
      </div>
        
    )
  }

}

export default NavBar;
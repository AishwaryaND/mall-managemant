import React,{Component} from 'react';
import './Styles/Img.css';
import './Styles/Home.css';

class Home extends Component{
 render(){

return(
    <div className="main">
        <nav>
      <div className="logo">
        <h1>
          Manage Mart
        </h1>
      </div>

      <div className="menu">
        <a to="/">Home</a>
        <a to="/About">About</a>
        <a to="/Contact">Contact</a>
        <a to="/Services">Services</a>
        <a to='/Login'>Login</a>
      </div>
    </nav>
    <div className="bdy">

    <section>
      <h1>Welcome to Manage Mart!!</h1>
      <h4>We Manage Your Things <i classNaame="fa fa-smile-o" aria-hidden="true"></i></h4>
  
    </section>
    
    </div>
  

  </div>
)
 }
}

export default Home;
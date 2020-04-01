import React, { Component } from 'react';
import {BrowserRouter ,Route} from 'react-router-dom';
import NavBar from './HomePage/NavBar';
import Img from './HomePage/Img';
import Footer from './HomePage/Footer';
import Home from './HomePage/Home';
import About from './HomePage/About';
import Contact from './HomePage/Contact';
import Services from './HomePage/Services';
import Login from './Login/Login';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Img >
          <NavBar/>
          <Footer/>
          <Route exact path='/' component={Home}/>
          <Route path='/About' component={About}/>
          <Route path='/Contact' component={Contact}/>
          <Route path='/Services' component={Services}/>
          </Img> 
          <Route path='/Login' component={Login}/>
        </div>
      </BrowserRouter>
    )
  }



}

export default App;

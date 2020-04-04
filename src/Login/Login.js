import React, {Component} from 'react';
import './Style/LoginStyle.css';
import MLogo from  '../Images/Manager.png';
import ALogo from  '../Images/Admin.png';
import LoginAdmin from './LoginAdmin';
// import LoginManager from './LoginManager';

class Login extends Component {

    constructor() {
        super();
        this.state = {
          isButtonSelected: '',
          
        };
      }

     AdminPage = () => {
        this.setState({ isButtonSelected: 'adminLogin' });
    }
    // ManagerPage = () => {
    //     this.setState({ isButtonSelected: 'managerLogin' });
    // }
    render(){
     return(
        <div className='cover'>
        { this.state.isButtonSelected === '' ? 
            <div className='OptionBox'>
                <div className='Managers'>
                    <img  src={MLogo} alt=''></img>
                    <h2>Manager Login</h2>
                    <p>Managers Can Login Here!!</p>
                    <br/>
                    <a >Login</a>
                    {/* <a onClick={this.ManagerPage}>Login</a> */}
                </div>
                <div className='vl'></div>
                <div className='Admin'>
                    <img src={ALogo} alt=''></img>
                    <h2>Admin Login</h2>
                    <p>Only Admins Can Login Here!!</p>
                    <br/>
                    <a onClick={this.AdminPage}>Login</a>
                </div>
            </div> : this.state.isButtonSelected === 'managerLogin'?null:<LoginAdmin/> }
        </div>
     )
    }
   
   }
export default Login;
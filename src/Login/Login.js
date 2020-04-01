import React, {Component} from 'react';
import './Style/LoginStyle.css';
import MLogo from  '../Images/Manager.png'
import ALogo from  '../Images/Admin.png'

class Login extends Component {
    render(){
     return(
        <div className='cover'>
            <div className='OptionBox'>
                <div className='Managers'>
                    <img  src={MLogo} alt=''></img>
                    <h2>Manager Login</h2>
                    <p>Managers Can Login Here!!</p>
                    <br/>
                    <a href=''>Login</a>
                </div>
                <div className='vl'></div>
                <div className='Admin'>
                    <img src={ALogo} alt=''></img>
                    <h2>Admin Login</h2>
                    <p>Only Admins Can Login Here!!</p>
                    <br/>
                    <a href=''>Login</a>
                </div>
            </div>
        </div>
     )
    }
   
   }
export default Login;
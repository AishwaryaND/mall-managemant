import React , { Component} from 'react';
import './Style/LoginAdminStyle.css';
import MLogo from  '../Images/Manager.png';
import ALogo from  '../Images/Admin.png';

class LoginManager extends Component {
 render(){
  return(
        <div>
              <img src={MLogo} alt=''></img>
        </div>

        );
 }

}

export default LoginManager;
import React , { Component} from 'react';
import './Style/LoginAdminStyle.css';
import MLogo from  '../Images/Manager.png';
import ALogo from  '../Images/Admin.png';

class LoginAdmin extends Component {
 render(){
  return(
        <div>
              <img src={ALogo} alt=''></img>
        </div>

        );
 }

}

export default LoginAdmin;
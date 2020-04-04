import React , { Component} from 'react';
import './Style/LoginAdminStyle.css';
import ALogo from  '../Images/Admin.png';

class LoginAdmin extends Component {
 render(){
  return(
      <div className='cover'>      
         <div className='loginBox'>
         <img src={ALogo}></img>
            <form>
                  
            </form>
         </div>
      </div> 
        );
 }

}

export default LoginAdmin;
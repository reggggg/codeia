import React, {Component} from 'react';
import {
  ModalHeader,
  ModalBody,
} from 'reactstrap';

import history from '../../js/history';

import '../../css/authentication/Login.css';

class Login extends Component {

  constructor(props){
    super(props);
    this.state = {

    }
  }


  loginModalToggle = () => {
    this.props.toggleLoginModal(false);
  }

  loginOnEnter = async e => {
    if(e.key === "Enter"){
      await this.validateFormLogin();
    }
  }

  loginOnChange = async e => {
    await this.setState({
      [e.target.name] : e.target.value
    });
  }

  validateFormLogin = () => {
    console.log('validated');
  }

  goToRegister = () => {
    this.loginModalToggle();
    history.push('/store/register');
  }

  goToForgotPassword = () => {
    this.loginModalToggle();
    history.push('/store/forgotPassword');
  }

  render(){
    return (
      <div className="login">
        <div className="loginContent">
          <ModalHeader className="loginModalHeader" toggle={this.loginModalToggle}>
            <span>
              <p>Login to your account</p>
            </span>
          </ModalHeader>
          <ModalBody className="loginModalBody">
            <div className="loginForm">
              <label>Email</label>
              <input type="email"
                     placeholder="Email"
                     name="email"
                     onChange={this.loginOnChange}
              />
              <label>Password</label>
              <input type="password"
                     placeholder="Password"
                     name="password"
                     onKeyPress={this.loginOnEnter}
                     onChange={this.loginOnChange}
              />
              <h6 onClick={this.goToForgotPassword}>Forgot Password?</h6>
              <button onClick={this.validateFormLogin}>LOGIN</button>
            </div>

            <div className="registerArea">
              <p>Don’t have an account? Register now for FREE!</p>
              <button onClick={this.goToRegister}>REGISTER</button>
            </div>
          </ModalBody>
        </div>
      </div>
    );
  }
}
export default Login;

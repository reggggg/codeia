import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import history from '../../js/history';

import '../../css/authentication/ForgotPassword.css';

class ForgotPassword extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  formOnChange = async e => {
    await this.setState({
      [e.target.name]: e.target.value
    });
  }

  onEnter = e => {
    if(e.key === 'Enter'){
      this.sendForgotPassword();
    }
  }

  sendForgotPassword = () => {
    alert(this.state.email)
  }

  render(){
    return (
      <div className="forgotPassword">
        <Container>
          <Row className="forgotPasswordContent">
            <Col md="3" className="left">
              <h5>Don't have an account?</h5>
              <button onClick={() => history.push('/register')}>SIGN UP</button>
            </Col>
            <Col md="9" className="right">
              <div className="formBody">
                <label>Forgot Password?</label>
                <hr/>
                <p>Enter your email to receive a password reset link.</p>
                <input type="text"
                       placeholder="Account email address"
                       name="email"
                       onKeyPress={this.onEnter}
                       onChange={this.formOnChange}
                />
                <div>
                  <button onClick={this.sendForgotPassword}>RESET PASSWORD</button>
                </div>
              </div>

            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default ForgotPassword;

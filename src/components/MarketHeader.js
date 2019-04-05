import React, {Component} from 'react';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Modal,
} from 'reactstrap';

import LoginModal from './authentication/Login';
import history from '../js/history';

import '../css/MarketHeader.css';

class MarketHeader extends Component {

  constructor(props){
    super(props);
    this.state = {
      mobileViewIsOpen: false,
    }
  }


  mobileViewToggle = () => {
    this.setState({
      mobileViewIsOpen: !this.state.mobileViewIsOpen
    });
  }

  loginModalToggle = async () => {
    await this.setState({
      loginModal: !this.state.loginModal
    });
  }

  loginModalToggleFromHeader = async (e) => {
    await this.setState({
      loginModal: e
    });
  }




  render(){
    return (
      <div className="marketHeader">
        <Navbar expand="md">
          <Container>
            <NavbarBrand onClick={() => history.push('/')}><img src={require('../images/market/codeia-LogoText-white-01.svg')} alt=""/></NavbarBrand>
            <NavbarToggler className={this.state.mobileViewIsOpen === true ? 'mobileViewActive' : ''} onClick={this.mobileViewToggle} />
            <Collapse className="marketHeaderCollapse" isOpen={this.state.mobileViewIsOpen} navbar>
              <Nav className="linksBody ml-auto" navbar>
                <div className="cartLogo" onClick={() => history.push('/store/cart')}><img src={require('../images/market/icon-cart.svg')} alt=""/></div>
                <span onClick={this.loginModalToggle}>Login</span>
                <label className="slash" disabled>/</label>
                <span onClick={() => history.push('/store/register')}>Sign up</span>
              </Nav>
            </Collapse>
            <Modal className="loginModalContent" isOpen={this.state.loginModal} size="md">
              <LoginModal toggleLoginModal={this.loginModalToggleFromHeader} />
            </Modal>
          </Container>
        </Navbar>
      </div>
    );
  }
}
export default MarketHeader;

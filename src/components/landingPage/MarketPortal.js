import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';

import '../../css/landingPage/MarketPortal.css';

class MarketPortal extends Component {
  render(){
    return (
      <div className="marketPortal" id="marketPortal">
        <Container>
          <div className="marketPortalContent">
            <div className="titleBar">
              {/* <h6>Build your projects</h6> */}
              <h4>Ready to create your first project?</h4>
            </div>
            <Row className="flexBetween">
              <Col md="5" className="left" data-aos="fade-right" data-aos-duration={1000}>
                <div className="imgContainer">
                  <img src={require('../../images/codeia-LogoGreen.svg')} alt=""/>
                  <label>Development</label>
                </div>
                <h2>Codeia Dev</h2>
                <p>Do you need codes? Front-End Development? Back-End? Full-Stack? Visit Codeia Dev.</p>
                <div><button onClick={() => window.location.href = "https://dev.codeia.net"}>Go to Codeia Dev</button></div>
              </Col>
              <Col md="2" className="middle">
                <div className="vr"></div>
              </Col>
              <Col md="5" className="right" data-aos="fade-left" data-aos-duration={1000}>
                <div className="imgContainer">
                  <img src={require('../../images/codeia-LogoGreen.svg')} alt=""/>
                  <label>Graphics</label>
                </div>
                <h2>Codeia Graphics</h2>
                <p>Codeia Graphics is here for your Design and Marketing needs. Check out our fonts, web templates, and more!</p>
                <div><button onClick={() => window.location.href = "https://graphics.codeia.net"}>Go to Codeia Graphics</button></div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}
export default MarketPortal;

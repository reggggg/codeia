import React, {Component} from 'react';
import { Container } from 'reactstrap';

import '../../css/landingPage/Showcase.css';

class Showcase extends Component {

  startNow = () => {
    document.getElementById('marketPortal').scrollIntoView({
      behavior: 'smooth'
    });
  }

  render(){
    return (
      <div className="showcase">
        <Container>
          <center className="showcaseContent">
            <img src={require('../../images/showcaseBannerLogo.svg')} data-aos="zoom-in-up" data-aos-duration={1800} alt=""/>
            <h2 data-aos="fade-up" data-aos-duration={1500}>WEB SOLUTIONS</h2>
            <div className="hrLine" data-aos="zoom-in" data-aos-duration={2500}></div>
            <p data-aos="zoom-in-down" data-aos-duration={1000}>
              Hi! We are Codeia. We do web development, web design, graphics design, and marketing services. We also have website templates and codes you can easily use in your projects. Codeia provides your business needs.
            </p>
            <button data-aos="zoom-out" data-aos-duration={1000} onClick={this.startNow}>LEARN MORE</button>
          </center>
        </Container>
      </div>
    );
  }
}
export default Showcase;

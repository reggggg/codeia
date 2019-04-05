import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';

import '../../css/landingPage/About.css';

class About extends Component {
  render(){
    return (
      <div className="about" id="about">
        <Container>
          <Row className="aboutContent">
            <Col md="4" className="firstCol" data-aos="fade-right" data-aos-duration={1000}>
              <span>What we do</span>
              <h3>We build, design, and develop websites</h3>
              <p>
                Do you remember the amazing idea you had while you were having a cup of coffee before? Yes, those ideas - we can do them for you. Sit back, relax, and let us do all the work.
                <br/><br/>We do Web Design, Full-Stack Web Development, Graphic Designs and Digital Marketing. You can also buy ready-made codes and website templates you can easily download and use in your own project.
              </p>
              <button>Read more</button>
            </Col>
            <Col md="4" className="secondCol"></Col>
            <Col md="4" className="thirdCol" data-aos="fade-left" data-aos-duration={1000}>
              <span>Who we are</span>
              <h3>We are the best development team you’ll ever have</h3>
              <p>
                We are CODEIA, your partner in creating your dream project. We do Web Design, Web Development, Graphic Design and Digital Marketing.
                <br/><br/>CODEIA is a website that aims to help startups, small businesses and entrepreneurs to build their dream projects. We will be with you from planning to development, until the launching of your product.
              </p>
              <button>Get Quote</button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default About;

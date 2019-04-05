import React, {Component} from 'react';

import $ from 'jquery';

import Header from './Header';
import Showcase from './landingPage/Showcase';
import Services from './landingPage/Services';
import About from './landingPage/About';
import Portfolio from './landingPage/Portfolio';
import MarketPortal from './landingPage/MarketPortal';
import Clients from './landingPage/Clients';
import ContactUs from './landingPage/ContactUs';
import Partnerships from './landingPage/Partnerships';
import Location from './landingPage/Location';
import Summary from './landingPage/Summary';
import Footer from './Footer';

import AOS from 'aos';

import '../css/BodyIndex.css';


class BodyIndex extends Component {

  constructor(){
    super();
    this.state = {

    }
  }


  async componentDidMount(){
    $('.bodyIndex button.floatingButton').fadeOut(0);
    $(window).scroll(function() {
      if ($(this).scrollTop() >= 800) {
        $('.bodyIndex button.floatingButton').fadeIn(500);
      }else {
        $('.bodyIndex button.floatingButton').fadeOut(500);
      }
    });
    await AOS.init();
  }

  goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  render(){
    return (
      <div className="bodyIndex">
        <Header />
          <Showcase />
          <Services />
          <About />
          <Portfolio />
          <MarketPortal />
          <Clients />
          <ContactUs />
          <Partnerships />
          <Location />
          <Summary />
        <Footer />
        <button className="floatingButton" onClick={this.goToTop}>
          <img src={require('../images/arrow-up.svg')} alt="" />
        </button>
      </div>
    );
  }
}
export default BodyIndex;

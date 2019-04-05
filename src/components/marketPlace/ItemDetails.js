import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import StarRatings from 'react-star-ratings';

import '../../css/marketPlace/ItemDetails.css';

class ItemDetails extends Component {
  constructor(){
    super();
    this.state = {
      itemDetail: {
        title: 'Codeia',
        price: 15,
        img: require('../../images/cart/img-PreviewItemDet1.png'),
        desc: 'Codeia Template is is a new clean and polished HTML template perfect for air conditioning and heating service companies, installation services and air appliance repair centers. A professionaly-made and good-looking website is a must for a modern business. This template has unique and 100% responsive design works on any mobile device. Powered by HTML 5, CSS 3, jQuery, with the flexibility of Bootstrap 4. The design is very elegant and modern, and also very easy to customize with 1170px grid.',
        features: ['Responsive Layout', 'Bootstrap 3', 'ReactJS', 'HTML5', 'jQuery', 'Mobile Responsive', 'JavaScript', 'SideBar', 'Parallax Background Image'],
        rating: 4,
        sources: ['Google', 'Bootstrap 4', 'Icofont', 'OwlCarousel2', 'Mixitup']
      }
    }
  }

  changeRating = () => {

  }

  render(){
    const {
      title,
      price,
      img,
      desc,
      features,
      rating,
      sources
    } = this.state.itemDetail;

    return (
      <div className="itemDetails">
        <Container>
          <Row className="itemDetailsContent">
            <Col md="3" className="left">
              <span className="pricing">
                <h6>Item Price (USD)</h6>
                <h5>${parseFloat(price).toFixed(2)}</h5>
              </span>
              <p>Theme support auto-renews yearly.*</p>
              <div className="buyNowDiv">
                <button>BUY NOW</button>
              </div>
              <span className="cardPurchase">
                <img src={require('../../images/cart/img-MasterCard.png')} alt=""/>
                <img src={require('../../images/cart/img-visa.png')} alt=""/>
                <img src={require('../../images/cart/img-payPal.png')} alt=""/>
                <img src={require('../../images/cart/img-discover.png')} alt=""/>
                <img src={require('../../images/cart/img-amEx.png')} alt=""/>
              </span>
            </Col>
            <Col md="9" className="right">
              <div className="itemDetails">
                <label>Item Details</label>
                <hr/>
                <div className="eachItem">
                  <StarRatings
                    rating={rating}
                    starRatedColor="#F8B71C"
                    changeRating={this.changeRating}
                    numberOfStars={5}
                    name='rating'
                    starDimension="17px"
                    starSpacing="3px"
                  />
                  <img src={img} alt=""/>
                  <span className="buttonContainer">
                    <button className="buttonPreview">LIVE PREVIEW</button>
                    <button className="buttonBuyNow">BUY NOW</button>
                  </span>
                  <p>
                    <b>{title} - </b>
                    {desc}
                  </p>
                  <h6>Theme Features</h6>
                  <ul>
                    {
                      features.map(( item, index  ) => (
                        <li key={index}>- {item}</li>
                      ))
                    }
                  </ul>
                  <h6>Sources & Credits</h6>
                  <ul>
                    {
                      sources.map(( item, index ) => (
                        <li key={index}>- {item}</li>
                      ))
                    }
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default ItemDetails;

import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import moment from 'moment';

import history from '../../js/history';


import '../../css/marketPlace/Store.css';

class Store extends Component {
  constructor(props){
    super(props);
    this.state = {
      itemsRendering: false,
      activeTab: 1,
      templateData: [],
      filteredData: []
    }
  }

  componentWillMount(){
    this.setState({
      itemsRendering: true,
      templateData: [
        {
          img: require('../../images/market/img-PreviewImage.png'),
          title: 'Codeia', creator: 'Lester and friends',
          tags: ['React', 'Redux', 'Material UI V1', 'Material Design ReactStrap', 'BootStrap Flat Design Create React App based admin templates'],
          price: 12,
          sales: 105,
          dateUpdated: '1550732275'
        },
        {
          img: require('../../images/market/img-PreviewImage.png'),
          title: '123', creator: 'Lester and friends',
          tags: ['React', 'Redux', 'Material UI V1', 'Material Design ReactStrap', 'BootStrap Flat Design Create React App based admin templates'],
          price: 15,
          sales: 365,
          dateUpdated: '1550732275'
        },
        {
          img: require('../../images/market/img-PreviewImage.png'),
          title: '321', creator: 'Lester and friends',
          tags: ['React', 'Redux', 'Material UI V1', 'Material Design ReactStrap', 'BootStrap Flat Design Create React App based admin templates'],
          price: 19,
          sales: 76,
          dateUpdated: '1550732275'
        },
        {
          img: require('../../images/market/img-PreviewImage.png'),
          title: '534', creator: 'Lester and friends',
          tags: ['React', 'Redux', 'Material UI V1', 'Material Design ReactStrap', 'BootStrap Flat Design Create React App based admin templates'],
          price: 20,
          sales: 233,
          dateUpdated: '1550732275'
        },
      ]
    });
  }
  async componentDidMount(){
    await this.setState({
      filteredData: this.state.templateData,
      itemsRendering: false
    });
  }

  setTabActive = async tab => {
    await this.setState({
      activeTab: tab
    });
    console.log(this.state.activeTab);
  }

  searchInSearchBar = async e => {
    await this.setState({
      search: e.target.value
    });
    console.log(this.state.search);
  }

  validateEmptyInput = () => {
    if(!this.state.search){
      return 'nothing';
    }else {
      this.filterData();
    }
  }

  filterData = async () => {
    this.setState({
      itemsRendering: true
    });
    let filteredData = this.state.templateData.filter(item => {
      return item.title.toLowerCase().includes(this.state.search.toLowerCase());
    })
    await this.setState({
      filteredData: filteredData,
      itemsRendering: false
    });
  }


  onSeachEnter = e => {
    if(e.key === 'Enter'){
      this.validateEmptyInput();
    }
  }

  render(){

    const tabs = [
      {tab: 'All Items', class: this.state.activeTab  === 1 ? 'activeTab' : ''},
      {tab: 'WordPress', class: this.state.activeTab  === 2 ? 'activeTab' : ''},
      {tab: 'HTML', class: this.state.activeTab  === 3 ? 'activeTab' : ''},
      {tab: 'eCommerce', class: this.state.activeTab  === 4 ? 'activeTab' : ''},
      {tab: 'UI Designs', class: this.state.activeTab  === 5 ? 'activeTab' : ''},
      {tab: 'Plugins', class: this.state.activeTab  === 6 ? 'activeTab' : ''},
    ];

    const categories = [
      {category: 'All Items', count: '1988'},
      {category: 'WordPress', count: '877'},
      {category: 'HTML', count: '145'},
      {category: 'eCommerce', count: '99'},
      {category: 'UI Designs', count: '872'},
      {category: 'Plugins', count: '51'},
    ];

    return (
      <div className="store">
        <Container>
          <div className="storeContent">
            <ul className="tabs">
              {
                tabs.map(( item, index ) => (
                  <li key={index}
                      onClick={() => this.setTabActive(index + 1)}
                      className={item.class}
                  >
                    {item.tab}
                  </li>
                ))
              }
            </ul>
            <Row className="searchBar">
              <Col md="10">
                <input type="text"
                       placeholder="Search here..."
                       onKeyPress={this.onSeachEnter}
                       name="search"
                       ref="searchRef"
                       onChange={this.searchInSearchBar}
                />
              </Col>
              <Col md="2">
                <button onClick={this.validateEmptyInput}>
                  Search
                </button>
              </Col>
            </Row>

            <Row className="middleBody">
              <Col md="3" className="filters">
                <h3>Category</h3>
                <hr/>
                <ul className="categories">
                  {
                    categories.map(( item, index ) => (
                      <li key={index}
                          className={this.state.activeTab === index + 1 ? 'activeCategory' : ''}
                          onClick={() => this.setTabActive(index + 1)}
                      >
                        <b>{item.category}</b>
                        {item.count}
                      </li>
                    ))
                  }
                </ul>
              </Col>
              <Col md="9" className="templatesDiv">
                {
                  this.state.itemsRendering ?
                  <div className="marketStoreLoader">
                    <img src={require('../../images/loading.gif')} alt="" />
                  </div>
                  :
                  this.state.filteredData.map(( item, index ) => (
                    <Row key={index} className="eachTemplate">
                      <Col sm="6"><img src={item.img} alt=""/></Col>
                      <Col sm="6">
                        <h5>{item.title}</h5>
                        <h6>by {item.creator}</h6>
                        <p>{item.tags.join(', ')}</p>

                        <h5>${item.price}</h5>
                        <div className="flexbetween">
                          <h6>No. of items sold: {item.sales}</h6>
                          <h4>Last update: {moment.unix(item.dateUpdated).format('l')}</h4>
                        </div>
                        <div className="flexbetweenButtons">
                          <button className="preview" onClick={() => history.push('/store/itemDetails')}>Preview</button>
                          <button className="buyNow">Buy now</button>
                        </div>
                      </Col>
                    </Row>
                  ))
                }
              </Col>

            </Row>
          </div>
        </Container>
      </div>
    );
  }
}
export default Store;

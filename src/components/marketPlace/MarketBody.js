import React, {Component} from 'react';
import { Switch, Router, Route } from 'react-router-dom';
import MarketHeader from '../MarketHeader';
import Menu from './Menu';
import Banner from './Banner';
import Footer from '../Footer';

import Cart from './Cart';
import Store from './Store';
import Register from '../authentication/Register';
import ForgotPassword from '../authentication/ForgotPassword';
import ItemDetails from './ItemDetails';

import history from '../../js/history';

import '../../css/marketPlace/MarketBody.css';

class MarketBody extends Component {
  constructor(props){
    super(props);
    this.state = {
      rendering: true,
      bannerTitle: '',
      bannerSubtitle: '',
    }
  }

  async componentWillMount(){
    if(this.props.location.pathname === "/store"){
      await this.setState({
        bannerTitle: 'Themes & Templates',
        bannerSubtitle: '1988 Items found'
      });
    }else if(this.props.location.pathname === "/store/register"){
      await this.setState({
        bannerTitle: 'Account Creation',
        bannerSubtitle: 'Register and join our growing community for FREE!'
      });
    }else if(this.props.location.pathname === "/store/forgotPassword"){
      await this.setState({
        bannerTitle: 'Account password reset',
        bannerSubtitle: 'Password Reset'
      });
    }else if(this.props.location.pathname === "/store/itemDetails"){
      await this.setState({
        bannerTitle: 'Item Details',
        bannerSubtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
      });
    }
    else if(this.props.location.pathname === "/store/cart"){
      await this.setState({
        bannerTitle: 'Shopping Cart',
        bannerSubtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
      });
    }
  }
  async componentWillReceiveProps(nextProps){
    if(nextProps.location.pathname === "/store/register"){
      await this.setState({
        bannerTitle: 'Account Creation',
        bannerSubtitle: 'Register and join our growing community for FREE!'
      });
    }else if(nextProps.location.pathname === "/store"){
      await this.setState({
        bannerTitle: 'Themes & Templates',
        bannerSubtitle: '1988 Items found'
      });
    }else if(nextProps.location.pathname === "/store/forgotPassword"){
      await this.setState({
        bannerTitle: 'Account password reset',
        bannerSubtitle: 'Password Reset'
      });
    }else if(nextProps.location.pathname === "/store/itemDetails"){
      await this.setState({
        bannerTitle: 'Item Details',
        bannerSubtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
      });
    }else if(nextProps.location.pathname === "/store/cart"){
      await this.setState({
        bannerTitle: 'Shopping Cart',
        bannerSubtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
      });
    }
  }
  async componentDidMount(){
    await this.setState({
      rendering: false
    });
  }


  render(){
    return (
      this.state.rendering ?
      <div className="marketBody">
        <MarketHeader />
        <div className="loaderDiv">
          <img src={require('../../images/loading.gif')} alt=""/>
        </div>
      </div>
      :
      <div className="marketBody">
        <MarketHeader />
        <Menu />
        <Banner bannerTitle={this.state.bannerTitle} bannerSubtitle={this.state.bannerSubtitle} />
          <div className="marketBodyContent">
            <Router history={history}>
              <Switch>
                <Route exact path="/store" component={Store} />
                <Route path="/store/cart" component={Cart} />
                <Route path="/store/register" component={Register} />
                <Route path="/store/forgotPassword" component={ForgotPassword} />
                <Route path="/store/itemDetails" component={ItemDetails} />
              </Switch>
            </Router>
          </div>
        <Footer />
      </div>
    );
  }
}
export default MarketBody;

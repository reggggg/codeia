import React, { Component } from 'react';
import { Switch, Router, Route } from 'react-router-dom';
import history from './js/history';

import BodyIndex from './components/BodyIndex';
import Error404 from './components/Error404';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import './css/commons.css';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={BodyIndex} />
            <Route component={Error404} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

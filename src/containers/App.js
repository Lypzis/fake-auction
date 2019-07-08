import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Layout from '../hoc/Layout/Layout';
import Home from './Home/Home';
import Auction from './Auction/Auction';

import './App.css';

class App extends Component {

  render() {

    return ( // <Auction />
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/fake-auction/auctions" component={Auction} />
            <Route path="/fake-auction" component={Home} />
            <Redirect from="/" to="/fake-auction" />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;

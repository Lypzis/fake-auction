import React, { Component } from 'react';

import Layout from '../hoc/Layout/Layout';
import Home from './Home/Home';
import AuctionBattle from './AuctionBattle/AuctionBattle';

import './App.css';

class App extends Component {

  render() {

    return ( // <AuctionBattle />
      <div className="App">
        <Layout>
          <Home />
          
        </Layout>
      </div>
    );
  }
}

export default App;

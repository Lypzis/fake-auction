import React, { Component } from 'react';

import Layout from '../hoc/Layout/Layout';
import Home from './Home/Home';
//import Auction from './Auction/Auction';

import './App.css';

class App extends Component {

  render() {

    return ( // <Auction />
      <div className="App">
        <Layout>
          <Home />
          
        </Layout>
      </div>
    );
  }
}

export default App;

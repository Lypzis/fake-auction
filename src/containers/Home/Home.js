import React, { Component } from 'react';

import './Home.css';

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="intro-box">
                    <div className="intro-box__message">
                        <h1 className="intro-box__title">Welcome to Fake Auctions</h1>
                        <h2 className="intro-box__subtitle">The auctions simulator</h2>
                    </div>
                    <button className="intro-box__button">Let's get started</button>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;
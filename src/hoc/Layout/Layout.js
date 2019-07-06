import React, { Component } from 'react';

import Toolbar from '../../components/navigation/toolbar';

import './Layout.css';

class Layout extends Component {

    render() {
        return (
            <React.Fragment>
                <header className="header">
                    <Toolbar />
                </header>
                <main className="main">{this.props.children}</main>
                <footer className="footer">Fake Auctions © 2019 by Lypzis. All rights reserved.</footer>
            </React.Fragment>
        );
    }
}

export default Layout;
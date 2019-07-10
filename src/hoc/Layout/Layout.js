import React, { Component } from 'react';

import Toolbar from '../../components/navigation/toolbar';

import './Layout.css';

class Layout extends Component {

    state = {
        logo: { route: '/fake-auction', icon: 'icon-hammer2', name: 'Fake Auctions' },
        navLinks: [
            { route: '/fake-auction/auctions', icon: 'icon-hammer2', name: 'auctions' },
            { route: '/fake-auction', icon: 'icon-cart', name: 'cart' },
            { route: '/fake-auction', icon: 'icon-envelop', name: 'notifications' },
            { route: '/fake-auction', icon: 'icon-user', name: 'user' },
        ]
    }

    render() {
        return (
            <React.Fragment>
                <header className="header">
                    <Toolbar
                        logo={this.state.logo}
                        toolbarLinks={this.state.navLinks}
                    />
                </header>
                <main className="main">{this.props.children}</main>
                <footer className="footer">Fake Auctions © 2019 by Lypzis. All rights reserved.</footer>
            </React.Fragment>
        );
    }
}

export default Layout;
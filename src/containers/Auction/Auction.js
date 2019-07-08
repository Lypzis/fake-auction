import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import AuctionBattle from './AuctionBattle/AuctionBattle';
import AuctionItem from '../../components/UI/AuctionItem/auctionItem';

class Auction extends Component {

    render() {
        // <AuctionBattle />
        return (
            <React.Fragment>
                <Switch>
                    <Route path="/fake-auction/auctions/:id" component={AuctionBattle} />
                    <AuctionItem link="/fake-auction/auctions/:id" />
                </Switch>
            </React.Fragment>
        );
    }
}

export default Auction;
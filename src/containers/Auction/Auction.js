import React, { Component } from 'react';

//import AuctionBattle from './AuctionBattle/AuctionBattle';
import AuctionItem from '../../components/UI/AuctionItem/auctionItem';

class Auction extends Component {

    render() {
        // <AuctionBattle />
        return (
            <React.Fragment>
                <AuctionItem />
            </React.Fragment>

        );
    }
}

export default Auction;
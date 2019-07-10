import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import AuctionBattle from './AuctionBattle/AuctionBattle';
import AuctionItem from '../../components/UI/AuctionItem/auctionItem';
import Modal from '../../components/UI/Modal/Modal';
import AuctionItemDetails from '../../components/UI/AuctionItem/AuctionItemDetails/AuctionItemDetails';

class Auction extends Component {
    state = {
        modalShow: false
    }

    modalCloseHandler = () => {
        this.setState({ modalShow: false });
    }

    modalOpenHandler = () => {
        this.setState({ modalShow: true });
    }

    render() {
        let modalContent = null;

        modalContent = <AuctionItemDetails
            test="modal content" />

        return (
            <React.Fragment>
                <Modal
                    closeModal={this.modalCloseHandler}
                    show={this.state.modalShow}>
                    {modalContent}
                </Modal>
                <Switch>
                    <Route path="/fake-auction/auctions/:id" component={AuctionBattle} />
                    <AuctionItem
                        link="/fake-auction/auctions/:id"
                        openModal={this.modalOpenHandler} />
                </Switch>
            </React.Fragment>
        );
    }
}

export default Auction;
import React, { Component } from 'react';

import sprite from '../../../../assets/icons/sprite.svg';

import './AuctionItemDetails.css';

class AuctionItemDetails extends Component {

    render() {
        return (
            <React.Fragment>
                <ol className="details__list">
                    <li className="details__list-item">
                        <p className="topic">item condition:</p><p className="topic__content">Good</p>
                    </li>
                    <li className="details__list-item details__list-item--description">
                        <p className="topic">details: </p><p className="topic__content">A big yoshi sitting on the ground.</p>
                    </li>
                    <li className="details__list-item">
                        <p className="topic">return policy:</p><p className="topic__content">Accepts Return.</p>
                    </li>
                    <li className="details__list-item">
                        <p className="topic">shipping</p>
                    </li>
                    <li className="details__list-item">
                        <p className="topic">seller:</p><p className="topic__content">Ol'Daddy</p>
                    </li>
                    <li className="details__list-item">
                        <p className="topic">seller rate: </p>
                        <p className="topic__content">5</p>
                        <svg className="rate">
                            <use xlinkHref={`${sprite}#icon-star-full`}></use>
                        </svg>
                    </li>
                    <li className="details__list-item">
                        <p>contact:</p><p className="topic__content">oldaddy@yahoo.com</p>
                    </li>
                </ol>
            </React.Fragment>
        );
    }
}

export default AuctionItemDetails;
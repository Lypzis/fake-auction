import React from 'react';

//temporary
import image from '../../../assets/images/bigyoshi.png';

import './auctionItem.css';

const auctionItem = props => (
    <div className="auction-item"> 
        <button className="arrow-button">&lt;</button>
        <div>
            <img src={image} alt="item" className="auction-item__picture"/>
        </div>
        <div>
            <ol className="auction-item__information-list">
                <li className="auction-item__information-item">Title</li>
                <li className="auction-item__information-item">current price</li>
                <li className="auction-item__information-item">time left</li>

                <li className="auction-item__information-item">item details</li> {/* a popup button here..., perhaps? */}
            </ol>
        </div>
        <button  className="arrow-button">&gt;</button>
    </div>
);

export default auctionItem;
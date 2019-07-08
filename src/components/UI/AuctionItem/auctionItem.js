import React from 'react';
import { Link } from 'react-router-dom';

import sprite from '../../../assets/icons/sprite.svg';

//temporary
import image from '../../../assets/images/bigyoshi.png';

import './auctionItem.css';

const auctionItem = props => (
    <div className="auction-item"> 
        <button className="button arrow-button">&lt;</button>
        <figure className="auction-item__box">
            <img src={image} alt="item" className="auction-item__picture"/>
            <ol className="auction-item__information-list">
                <li className="auction-item__information-item">Big Yoshi</li>
                <li className="auction-item__information-item">current price: $x.x</li>
                <li className="auction-item__information-item">time left: x:xx:xx:xx</li>

                <li className="auction-item__information-item">
                    <button className="button details-button">
                    <svg className="details-icon">
                        <use xlinkHref={`${sprite}#icon-info`}></use>
                    </svg>
                        details
                    </button>
                </li>
                <li className="auction-item__information-item">
                    <Link to={props.link} className="button join-button">Join!</Link>
                </li>
            </ol>
        </figure>
        <button  className="button arrow-button">&gt;</button>
    </div>
);

export default auctionItem;
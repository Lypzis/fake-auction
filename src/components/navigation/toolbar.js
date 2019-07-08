import React from 'react';
import { Link } from 'react-router-dom';

import sprite from '../../assets/icons/sprite.svg';
import './toolbar.css';

const toolbar = props => (
    <React.Fragment>
        <h1 className="app-title">
            <figure className="logo-container">
                <Link to="/fake-auction">
                    <svg className="logo-icon">
                        <use xlinkHref={`${sprite}#icon-hammer2`}></use>
                    </svg>
                    Fake Auctions
                </Link>
            </figure>
        </h1>
        <nav className="navigation">
            <ol className="navigation__list">
                <li className="navigation__list-item">

                    <Link to="/fake-auction/auctions" className="navigation__link">
                        <svg className="nav-icon">
                            <use xlinkHref={`${sprite}#icon-hammer2`}></use>
                        </svg>
                        auctions
                    </Link>
                </li>
                <li className="navigation__list-item">

                    <a href="/fake-auction" className="navigation__link">
                        <svg className="nav-icon">
                            <use xlinkHref={`${sprite}#icon-cart`}></use>
                        </svg>
                        cart
                    </a>
                </li>
                <li className="navigation__list-item">

                    <a href="/fake-auction" className="navigation__link">
                        <svg className="nav-icon">
                            <use xlinkHref={`${sprite}#icon-envelop`}></use>
                        </svg>
                        messages
                    </a>
                </li>
                <li className="navigation__list-item">

                    <a href="/fake-auction" className="navigation__link">
                        <svg className="nav-icon">
                            <use xlinkHref={`${sprite}#icon-user`}></use>
                        </svg>
                        user
                    </a>
                </li>
            </ol>
        </nav>
    </React.Fragment>
);

export default toolbar;
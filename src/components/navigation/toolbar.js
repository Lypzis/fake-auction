import React from 'react';

import sprite from '../../assets/icons/sprite.svg';
import './toolbar.css';

const toolbar = props => (
    <React.Fragment>
        <h1 className="app-title">
            <figure className="logo-container">
                <a href="/">
                    <svg className="logo-icon">
                        <use xlinkHref={`${sprite}#icon-hammer2`}></use>
                    </svg>
                    Fake Auctions
                </a>
            </figure>
        </h1>
        <nav className="navigation">
            <ol className="navigation__list">
                <li className="navigation__list-item">
                    <a href="/" className="navigation__link">auctions</a>
                </li>
                <li className="navigation__list-item">
                    <a href="/" className="navigation__link">cart</a>
                </li>
                <li className="navigation__list-item">
                    <a href="/" className="navigation__link">messages</a>
                </li>
                <li className="navigation__list-item">
                    <a href="/" className="navigation__link">
                        <img src="" alt="user" />
                    </a>
                </li>
            </ol>
        </nav>
    </React.Fragment>
);

export default toolbar;
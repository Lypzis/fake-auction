import React from 'react';
import { Link } from 'react-router-dom';

import sprite from '../../assets/icons/sprite.svg';
import './toolbar.css';

const toolbar = props => {

    const navLinksListItems = props.toolbarLinks.map(toolbarLink => {
        return (
            <li key={toolbarLink.name} className="navigation__list-item">
                <Link to={toolbarLink.route} className="navigation__link">
                    <svg className="nav-icon">
                        <use xlinkHref={`${sprite}#${toolbarLink.icon}`}></use>
                    </svg> {toolbarLink.name}
                </Link>
            </li>
        );
    });

    return (
        <React.Fragment>
            <h1 className="app-title">
                <figure className="logo-container">
                    <Link to={props.logo.route}>
                        <svg className="logo-icon">
                            <use xlinkHref={`${sprite}#${props.logo.icon}`}></use>
                        </svg>
                        {props.logo.name}
                </Link>
                </figure>
            </h1>
            <nav className="navigation">
                <ol className="navigation__list">
                    {navLinksListItems}
                </ol>
            </nav>
        </React.Fragment>
    );
};

export default toolbar;
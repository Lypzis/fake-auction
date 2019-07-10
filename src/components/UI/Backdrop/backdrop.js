import React from 'react';

import './backdrop.css';

const backdrop = props => (
    <div 
    className={["backdrop", props.show ? "Backdrop--show" : "Backdrop--doNotShow"].join(' ')}
    onClick={props.close}></div>
);

export default backdrop;
import React, { Component } from 'react';

import Backdrop from '../Backdrop/backdrop';

import './Modal.css';

class Modal extends Component {

    componentDidMount() {
        console.log('Modal.js' + this.props.show);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    render() {
        return (
            <React.Fragment>
                <Backdrop show={this.props.show} close={this.props.closeModal}/>
                <div className={["modal", this.props.show ? "Modal--show" : "Modal--doNotShow"].join(' ')}>{this.props.children}</div>
            </React.Fragment>
        );
    }
};

export default Modal;



/*
shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    
    componentWillUpdate() {
        console.log('[Modal.js] will update')
    } 

    render() {
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClose} />
                <div className={[classes.Modal, this.props.show ? classes.show : classes.doNotShow].join(' ')}>
                    {this.props.children}
                </div>
            </Aux >
        );
    }
*/
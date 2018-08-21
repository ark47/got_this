import React from 'react';
import classes from './Backdrop.css';

const backdrop = (props) => (
    <div style={{transform: props.show ? 'translateX(0)' : 'translateX(-100vh)', opacity: props.show ? '1' : '0'}} className={classes.Backdrop}></div>
);

export default backdrop;
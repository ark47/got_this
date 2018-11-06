import React from 'react';
import classes from './Timer.css';

const timer = (props) => {
    let min = Math.floor(props.time / 60);
    let sec;

    if (props.time % 60 >= 10) {
        sec = props.time % 60;
    } else {
        sec = '0' + props.time % 60;
    }
    
    return (
        <div className={classes.Timer}>
            <h2>{min+':'+sec}</h2>
        </div>
    )
}

export default timer;
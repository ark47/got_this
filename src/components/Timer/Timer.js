import React from 'react';
import classes from './Timer.css';

const timer = (props) => {
    let min = Math.floor(props.time / 60);
    let sec;
    let color;

    if (props.time % 60 >= 10) {
        sec = props.time % 60;
    } else {
        sec = '0' + props.time % 60;
    }

    if (props.path === 'sunset') {
        color = 'rgb(255, 175, 27)';
    } else if (props.path === 'balloon') {
        color = 'rgb(99, 190, 175)';
    } else {
        color = 'white';
    }
    
    return (
        <div style={{opacity: props.path ? 1 : 0}} className={classes.Timer}>
            <h2 style={{color: color}}>{min+':'+sec}</h2>
        </div>
    )
}

export default timer;
import React from 'react';
import classes from './Speed.css';

const speed = (props) => {
    return (
        <div className={classes.Speed} style={{display: props.show ? 'inherit' : 'none', opacity: props.show ? '1' : '0'}}>
            <p style={{color: 'white', textAlign: 'center', fontSize: '2vw'}}>Speed: {props.speed}</p>
            <input type="range" min="1" max="9" value={props.speed} className={classes.slider} onChange={props.changeSpeed} />
        </div>
    );
}

export default speed;
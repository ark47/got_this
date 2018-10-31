import React from 'react';
import classes from './PathOptions.css';

const pathOptions = (props) => {
    return (
    <div className={classes.PathOptions} style={{transform: props.show ? 'translateX(0)' : 'translateX(100vh)', opacity: props.show ? '1' : '0'}}>
        <ul>
            <li style={{backgroundColor: 'Tomato'}} onClick={() => props.pathSelect('sunset')}></li>
            <li style={{backgroundColor: 'DarkCyan'}} onClick={() => props.pathSelect('balloon')}></li>
            <li style={{backgroundColor: 'FireBrick'}} onClick={() => props.pathSelect('classic')}></li>
        </ul>
    </div>
    );
}

export default pathOptions;
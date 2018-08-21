import React from 'react';
import classes from './PathOptions.css';

const pathOptions = (props) => {
    return (
    <div className={classes.PathOptions} style={{transform: props.show ? 'translateX(0)' : 'translateX(100vh)', opacity: props.show ? '1' : '0'}}>
        <ul>
            <li style={{backgroundColor: 'Tomato'}} onClick={() => props.pathSelect('Tomato')}></li>
            <li style={{backgroundColor: 'DarkCyan'}} onClick={() => props.pathSelect('DarkCyan')}></li>
            <li style={{backgroundColor: 'FireBrick'}} onClick={() => props.pathSelect('FireBrick')}></li>
            <li style={{backgroundColor: 'MediumVioletRed'}} onClick={() => props.pathSelect('MediumVioletRed')}></li>
            <li style={{backgroundColor: 'SteelBlue'}} onClick={() => props.pathSelect('SteelBlue')}></li>
            <li style={{backgroundColor: 'SeaGreen'}} onClick={() => props.pathSelect('SeaGreen')}></li>
        </ul>
    </div>
    );
}

export default pathOptions;
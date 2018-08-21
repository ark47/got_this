import React from 'react';
import classes from './BackgroundOptions.css';

const backgroundOptions = (props) => {
    return (
    <div className={classes.BackgroundOptions} style={{transform: props.show ? 'translateY(0)' : 'translateY(-100vh)', opacity: props.show ? '1' : '0'}}>
        <ul>
            <li style={{backgroundColor: 'Tomato'}} onClick={() => props.bgSelect('Tomato')}></li>
            <li style={{backgroundColor: 'DarkCyan'}} onClick={() => props.bgSelect('DarkCyan')}></li>
            <li style={{backgroundColor: 'FireBrick'}} onClick={() => props.bgSelect('mcdeebg')}></li>
            <li style={{backgroundColor: 'MediumVioletRed'}} onClick={() => props.bgSelect('MediumVioletRed')}></li>
            <li style={{backgroundColor: 'SteelBlue'}} onClick={() => props.bgSelect('mountain')}></li>
            <li style={{backgroundColor: 'SeaGreen'}} onClick={() => props.bgSelect('sky')}></li>
        </ul>
    </div>
    );
}

export default backgroundOptions;
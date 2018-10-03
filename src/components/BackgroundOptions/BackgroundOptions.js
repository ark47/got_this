import React from 'react';
import classes from './BackgroundOptions.css';

const backgroundOptions = (props) => {
    return (
    <div className={classes.BackgroundOptions} style={{transform: props.show ? 'translateY(0)' : 'translateY(-100vh)', opacity: props.show ? '1' : '0'}}>
        <ul>
            <li style={{backgroundColor: 'White'}} onClick={() => props.bgSelect('white')}></li>
            <li style={{backgroundColor: 'MediumVioletRed'}} onClick={() => props.bgSelect('sunset')}></li>
            <li style={{backgroundColor: 'SeaGreen'}} onClick={() => props.bgSelect('sky')}></li>
        </ul>
    </div>
    );
}

export default backgroundOptions;
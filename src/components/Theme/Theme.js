import React from 'react';
import classes from './Theme.css';

const theme = (props) => {
    return (
        <div style={{transform: props.show ? 'translateY(0)' : 'translateY(100vh)', opacity: props.show ? '1' : '0'}} className={classes.Theme}>
            <ul>
                <li onClick={() => props.theme('balloon')} className={classes.Balloon} ><h2>Balloon Ride</h2></li>
                <li onClick={() => props.theme('sunset')} className={classes.Sunset} ><h2 >Windy Sunset</h2></li>
                <li onClick={() => props.theme('classic')} className={classes.Basic} ><h2 >Classic Mode</h2></li>
            </ul>
        </div>
    );
}

export default theme;
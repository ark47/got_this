import React from 'react';
import classes from './Theme.css';

const theme = () => {
    return (
        <div className={classes.Theme}>
            <ul>
                <li className={classes.Balloon} ><h2>Balloon Ride</h2></li>
                <li className={classes.Sunset} ><h2>Windy Sunset</h2></li>
                <li className={classes.Basic} ><h2>Classic Mode</h2></li>
            </ul>
        </div>
    );
}

export default theme;
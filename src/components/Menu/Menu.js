import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Menu.css';
import ThemeIcon from '../MenuItems/ThemeIcon';
import TimeIcon from '../MenuItems/TimeIcon';
import Start from '../MenuItems/Start';

const menu = (props) => {
    return (
        <Aux>
            <div className={classes.Menu}>
                <div className={classes.MenuItem} ><ThemeIcon /></div>
                <div className={classes.MenuItem} ><TimeIcon /></div>
                <div className={classes.MenuItem} ><Start /></div>
            </div>
        </Aux>
    );
}

export default menu;
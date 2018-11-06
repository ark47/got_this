import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Menu.css';
import ThemeIcon from '../MenuItems/ThemeIcon';
import TimeIcon from '../MenuItems/TimeIcon';
import Start from '../MenuItems/Start';
import Bug from '../MenuItems/Bug';

const menu = (props) => {
    return (
        <Aux>
            <div className={classes.Menu}>
                <div className={classes.MenuItem} onClick={props.themeMenu} ><ThemeIcon /></div>
                <div className={classes.MenuItem} onClick={props.timeMenu} ><TimeIcon /></div>
                <div className={classes.MenuItem} onClick={props.start} ><Start /></div>
                <div className={classes.MenuItem} ><Bug /></div>
            </div>
        </Aux>
    );
}

export default menu;
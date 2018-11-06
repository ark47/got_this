import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Toolbar.css';

const toolbar = (props) => {

        /* Show/Hide the Start button; dependant on all options having a choice. */
        let startButton = 'none';
        if (props.cursor && props.path && props.background) {
            startButton = 'inherit';
        }

        /* Message to user if they choose a time frame less than 60 seconds */
        let timeMin = null;
        if (props.time < 60) {
            timeMin = <p>Going at least 60 seconds has shown to yield positive results.</p>
        }

        /* Time formatting */
        let minutesPlural = null;
        if (props.time > 60) {
            minutesPlural = 'minutes';
        } else if (props.time < 60) {
            minutesPlural = 'seconds';
        } else {
            minutesPlural = 'minute';
        }

        return (
            <Aux>
                <div className={classes.Toolbar} style={{transform: props.show ? 'translateX(0)' : 'translateX(-100vh)', opacity: props.show ? '1' : '0'}} >

                    <div style={{color: props.pointerActive ? 'aqua' : 'white'}} className={classes.menuItem} onClick={props.pointerMenu}>Pointer</div>

                    <div style={{color: props.bgActive ? 'aqua' : 'white'}} className={classes.menuItem} onClick={props.bgMenu}>Background</div>
                    
                    <div style={{color: props.pathActive ? 'aqua' : 'white'}} className={classes.menuItem} onClick={props.pathMenu} >Path</div>

                    <div style={{marginTop: '24px'}}>Speed: {props.speed}</div>
                    <input type="range" min="1" max="9" value={props.speed} className={classes.slider} onChange={props.changeSpeed} />
                    
                    <div>{props.time >= 60 ? props.time / 60 : props.time % 60} {minutesPlural}</div>
                    {timeMin}
                    <input type="range" min="30" max="300" step="30" value={props.time} className={classes.slider} onChange={props.changeTime} />
                    
                    <div style={{display: startButton, marginTop: '24px', transition: '0.3s'}} className={classes.menuItem} onClick={props.start}>Start</div>
                </div>
            </Aux>
        );

}

export default toolbar;
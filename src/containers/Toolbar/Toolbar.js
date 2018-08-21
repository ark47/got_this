import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import classes from './Toolbar.css';

class Toolbar extends Component {

    // state = {
    //     distance: '75'
    // }

    // distanceChangeHandler = (e) => {
    //     this.setState({distance: e.target.value});
    // }

    render () {

        /* Message to user if they choose a time frame less than 60 seconds */
        let timeMin = null;
        if (this.props.time < 60) {
            timeMin = <p>Going at least 60 seconds has shown to yield positive results.</p>
        }

        /* Time formatting */
        let minutesPlural = null;
        if (this.props.time > 60) {
            minutesPlural = 'minutes';
        } else if (this.props.time < 60) {
            minutesPlural = 'seconds';
        } else {
            minutesPlural = 'minute';
        }

        return (
            <Aux>
                <div className={classes.Toolbar} style={{transform: this.props.show ? 'translateX(0)' : 'translateX(-100vh)', opacity: this.props.show ? '1' : '0'}} >

                    <div style={{color: this.props.pointerActive ? 'aqua' : 'white'}} className={classes.menuItem} onClick={this.props.pointerMenu}>Pointer</div>

                    <div style={{color: this.props.bgActive ? 'aqua' : 'white'}} className={classes.menuItem} onClick={this.props.bgMenu}>Background</div>
                    
                    <div style={{color: this.props.pathActive ? 'aqua' : 'white'}} className={classes.menuItem} onClick={this.props.pathMenu} >Path</div>

                    <div style={{marginTop: '24px'}}>Speed: {this.props.speed}</div>
                    <input type="range" min="1" max="9" value={this.props.speed} className={classes.slider} onChange={this.props.changeSpeed} />

                    {/* <p>Distance: {`${this.state.distance}% of screen width.`}</p>
                    <input type="range" min="25" max="90" step="5" value={this.state.distance} className={classes.slider} onChange={this.distanceChangeHandler} /> */}
                    
                    <div>{this.props.time >= 60 ? this.props.time / 60 : this.props.time % 60} {minutesPlural}</div>
                    {timeMin}
                    <input type="range" min="30" max="300" step="30" value={this.props.time} className={classes.slider} onChange={this.props.changeTime} />
                    
                    <div style={{marginTop: '24px'}} className={classes.menuItem} onClick={this.props.start}>Start</div>
                </div>
            </Aux>
        );
    }
}

export default Toolbar;
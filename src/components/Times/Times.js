import React from 'react';
import classes from './Times.css';
import One from '../Minutes/One';
import Two from '../Minutes/Two';
import Three from '../Minutes/Three';

const times = (props) => {

    const time = [60, 120, 180]
    const compTimes = [<One />, <Two />, <Three />]
    // const timeWidth = `${100 / time.length}%`;

    const timeOptions = time.map(tyme => {

        // let min = Math.floor(tyme / 60);
        // let sec;
    
        // if (tyme % 60 >= 10) {
        //     sec = tyme % 60;
        // } else {
        //     sec = '0' + tyme % 60;
        // }

        return (
            <li onClick={() => props.times(tyme)} className={classes.Tyme} key={tyme}>
                {/* <h2 onClick={() => props.times(tyme)}>{`${min}:${sec}`}</h2> */}
                {compTimes[time.indexOf(tyme)]}
            </li>
        );
    });

    return (
        <div style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-200vh)',
            opacity: props.show ? '1' : '0',
            display: props.show ? 'inherit' : 'hidden'
            }} 
            className={classes.Times}>
                <ul>
                    {timeOptions}
                </ul>
        </div>
    );
}

export default times;
import React from 'react';
import classes from './Times.css';

const times = (props) => {

    const time = [60, 120, 180]
    // const timeWidth = `${100 / time.length}%`;

    const timeOptions = time.map(tyme => {

        let min = Math.floor(tyme / 60);
        let sec;
    
        if (tyme % 60 >= 10) {
            sec = tyme % 60;
        } else {
            sec = '0' + tyme % 60;
        }

        return (
            <li className={classes.Tyme} key={tyme}>
                <h2 onClick={() => props.times(tyme)}>{`${min}:${sec}`}</h2>
            </li>
        );
    });

    return (
        <div style={{transform: props.show ? 'translateY(0)' : 'translateY(-100vh)', opacity: props.show ? '1' : '0'}} className={classes.Times}>
            <ul>
                {timeOptions}
            </ul>
        </div>
    );
}

export default times;
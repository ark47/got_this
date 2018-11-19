import React from 'react';
import classes from './Start.css'

const start = (props) => {
    return (
        <div onClick={props.start} style={{display: props.show ? 'inherit' : 'none', opacity: props.show ? '1' : '0'}} className={classes.Start}>
            <svg height="100%" viewBox="0 0 200 200" >
                <path d="M25.94,27.284L167.751,100L25.94,172.716l27.039-69.07L54.406,100l-1.427-3.645L25.94,27.284 M7,6.333
                L43.667,100L7,193.666L189.667,100L7,6.333L7,6.333z"/>
            </svg>
        </div>
    );
}

export default start;
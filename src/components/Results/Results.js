import React from 'react';
import classes from './Results.css';

const results = (props) => {
    let show = '100%';
    if (props.pre && props.post) {
        show = '25%'
    }
    return (
        <div style={{top: show}} className={classes.Results}>
            <h1>Results</h1>
            <div style={{padding: '32px'}}><p>You were feeling</p>{props.pre}</div>
            <div style={{padding: '32px'}}><p>Now you're feeling</p>{props.post}</div>
        </div>
    );
}

export default results;
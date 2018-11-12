import React from 'react';
import classes from './BugReport.css';

const bugReport = (props) => (
    <div className={classes.BugReport}>
        <p>Issue #{props.index}</p>
        <p>{props.issue}</p>
    </div>
);

export default bugReport;
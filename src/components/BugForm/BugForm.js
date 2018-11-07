import React from 'react';
import classes from './BugForm.css';

const bugForm = (props) => {
    return (
        <div style={{transform: props.show ? 'translateY(0)' : 'translateY(-100vh)', opacity: props.show ? '1' : '0'}} className={classes.BugForm}>
            <h2>Report Bug</h2>
            <form>
                <textarea name="bug" placeholder="Enter details of the issue here."/>
                <div style={{display: 'block'}}><input type="submit" value="Submit" /></div>
            </form>
        </div>
    );
}

export default bugForm;
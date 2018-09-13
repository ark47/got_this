import React from 'react';
import classes from './FirstQuestion.css'

const firstQuestion = (props) => {

    /* Map this.state.options into checkboxes. */
    const allOptions = props.options.map(option => {
        return (
            <label key={option} className={classes.container}>
                <input value={option} type="checkbox" onChange={props.answerChange} />
                <span className={classes.checkmark}>
                    {option.replace(/\b\w/g, l => l.toUpperCase())}
                </span>
            </label>
        );
    });

    return (
        <div className={classes.FirstQuestion}>
            <h1>Hey friend, what's troubling you?</h1>
            {allOptions}
        </div>
    )
}

export default firstQuestion;
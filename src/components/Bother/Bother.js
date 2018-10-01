import React from 'react';
import classes from './Bother.css';

const bother = (props) => {

    /* Output props.answer into a string */
    let answersString;
    if (props.answer.length === 1) {
        answersString = `How much is ${props.answer.join('')} bothering you?`;
    } else if (props.answer.length === 2) {
        answersString = `How much are ${props.answer[0]} and ${props.answer[1]} bothering you?`;
    } else if (props.answer.length > 2) {
        answersString = `How much are ${props.answer.slice(0, -1).join(', ')}, and ${props.answer.slice(-1)} bothering you?`;
    }

    /* Ouput each index value from props.botherOptions into a radio button. */
    const botherOptions = props.botherOptions.map(option => {
        return (
            <label key={option}>
                <input type="radio" value={option} onChange={props.answerChange} onClick={props.menu} />
                <div className={classes.radio}>{option}</div>
            </label>
        );
    });

    return (
        <div style={{top: props.show ? '25%' : '-100%', left: props.appear ? '150%' : '25%'}} className={classes.Bother}>
            <p>{answersString}</p>
            {botherOptions}
        </div>
    )
}

export default bother;
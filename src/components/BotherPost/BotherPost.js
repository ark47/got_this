import React from 'react';
import classes from './BotherPost.css';

const botherPost = (props) => {

    /* Output props.answer into a string */
    let answersString;
    if (props.answer.length === 1) {
        answersString = `How much is ${props.answer.join('')} bothering you now?`;
    } else if (props.answer.length === 2) {
        answersString = `How much are ${props.answer[0]} and ${props.answer[1]} bothering you now?`;
    } else if (props.answer.length > 2) {
        answersString = `How much are ${props.answer.slice(0, -1).join(', ')}, and ${props.answer.slice(-1)} bothering you now?`;
    }

    /* Ouput each index value from props.botherOptions into a radio button. */
    const botherOptions = props.botherOptions.map(option => {
        return (
            <label key={option}>
                <input type="radio" value={option} onChange={props.answerChange} />
                <div className={classes.radio}>{option}</div>
            </label>
        );
    });

    return (
        <div style={{top: props.appear ? '25%' : '-100%', left: props.show ? '-100%' : '25%'}} className={classes.BotherPost}>
            <p>{answersString}</p>
            {botherOptions}
        </div>
    )
}

export default botherPost;
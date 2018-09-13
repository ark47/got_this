import React from 'react';

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

    return <p>{answersString}</p>
}

export default bother;
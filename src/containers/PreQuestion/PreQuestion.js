import React, { Component } from 'react';
// import Aux from '../../hoc/Aux';
import classes from './PreQuestion.css';

class PreQuestion extends Component {

    state = {
        options: ['school', 'relationship', 'work', 'medical', 'money', 'sleep'],
        answers: []
    }

    answerChangeHandler = (event) => {
        let prevAnswers = this.state.answers;
        if (!prevAnswers.includes(event.target.value)) {
            prevAnswers.push(event.target.value);
            this.setState({
                answers: prevAnswers
            });
        } else {
            let removed = prevAnswers.indexOf(event.target.value);
            if (removed > 0) {
                prevAnswers.splice(removed, 1);
              } else {
                prevAnswers.shift()
            }
            this.setState({
                answers: prevAnswers
            })
        }
    }

    render () {

        /* Map this.state.options into checkboxes. */
        const allOptions = this.state.options.map(option => {
            return (
                <label key={option} className={classes.container}>
                    <input value={option} type="checkbox" onChange={this.answerChangeHandler} />
                    <span className={classes.checkmark}>{option.replace(/\b\w/g, l => l.toUpperCase())}</span>
                </label>
            );
        });

        /* Output this.state.answers into a string */
        let answersString;
        if (this.state.answers.length === 1) {
            answersString = `How much is ${this.state.answers.join('')} bothering you?`;
        } else if (this.state.answers.length === 2) {
            answersString = `How much are ${this.state.answers[0]} and ${this.state.answers[1]} bothering you?`;
        } else if (this.state.answers.length > 2) {
            answersString = `How much are ${this.state.answers.slice(0, -1).join(', ')}, and ${this.state.answers.slice(-1)} bothering you?`;
        }

        return (
            <div className={classes.PreQuestion}>
                <h1>Hey friend, what's troubling you?</h1>
                {allOptions}
                <p>{answersString}</p>
            </div>
        )
    }
}

export default PreQuestion;
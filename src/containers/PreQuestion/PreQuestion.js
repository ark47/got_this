import React, { Component } from 'react';
// import Aux from '../../hoc/Aux';
import classes from './PreQuestion.css';

class PreQuestion extends Component {

    state = {
        options: ['school', 'relationship', 'work', 'friend', 'interview', 'performance'],
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
        console.log(this.state.answers);
    }

    render () {
        /* TO DO: Iterate through 'options' array via .map to create below structure */
        return (
            <div className={classes.PreQuestion}>
                <h1>Hey friend, what's troubling you?</h1>
                <label className={classes.container}>
                    <input value="work" type="checkbox" onChange={this.answerChangeHandler} />
                    <span className={classes.checkmark}>Work</span>
                </label>
                <label className={classes.container}>
                    <input value="relationship" type="checkbox" onChange={this.answerChangeHandler} />
                    <span className={classes.checkmark}>Relationship</span>
                </label>
                <label className={classes.container}>
                    <input value="school" type="checkbox" onChange={this.answerChangeHandler} />
                    <span className={classes.checkmark}>School</span>
                </label>
                <label className={classes.container}>
                    <input value="friend" type="checkbox" onChange={this.answerChangeHandler} />
                    <span className={classes.checkmark}>Friend</span>
                </label>
                <label className={classes.container}>
                    <input value="interview" type="checkbox" onChange={this.answerChangeHandler} />
                    <span className={classes.checkmark}>Interview</span>
                </label>
                <label className={classes.container}>
                    <input value="performance" type="checkbox" onChange={this.answerChangeHandler} />
                    <span className={classes.checkmark}>Performance</span>
                </label>
            </div>
        )
    }
}

export default PreQuestion;
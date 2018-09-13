import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import FirstQuestion from '../../components/FirstQuestion/FirstQuestion';
import Bother from '../../components/Bother/Bother';

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

        return (
            <Aux>
                <FirstQuestion options={this.state.options} answerChange={this.answerChangeHandler} />
                <Bother answer={this.state.answers} />

                {/* HOW MUCH IS THIS BOTHERING YOU NOW COMP. */}
                {/* RESULTS */}
            </Aux>
        )
    }
}

export default PreQuestion;
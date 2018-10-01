import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import FirstQuestion from '../../components/FirstQuestion/FirstQuestion';
import Bother from '../../components/Bother/Bother';
import BotherPost from '../../components/BotherPost/BotherPost';
import Results from '../../components/Results/Results';

class PreQuestion extends Component {

    state = {
        options: ['school', 'relationship', 'work', 'medical', 'money', 'sleep'],
        answers: [],
        bothering: ['1: Fine', '2: Agitated', '3: Sad', '4: Lonely', '5: Depressed', '6: Miserable'],
        preBother: null,
        first: false,
        postBother: null
    }

    answerChangeHandler = (event) => {
        let prevAnswers = this.state.answers;
        if (!prevAnswers.includes(event.target.value)) {
            prevAnswers.push(event.target.value);
            this.setState({
                answers: prevAnswers,
                first: true
            });
        } else {
            let removed = prevAnswers.indexOf(event.target.value);
            if (removed > 0) {
                prevAnswers.splice(removed, 1);
              } else {
                prevAnswers.shift()
            }
            this.setState({
                answers: prevAnswers,
                first: true
            })
        }
        if (prevAnswers.length < 1) {
            this.setState({
                first: false
            })
        }
    }

    preBotherHandler = (event) => {
        this.setState({
            preBother: event.target.value
        });
    }

    postBotherHandler = (event) => {
        this.setState({
            postBother: event.target.value
        });
    }

    render () {

        return (
            <Aux>
                <FirstQuestion show={this.state.first} options={this.state.options} answerChange={this.answerChangeHandler} />
                
                <Bother answerChange={this.preBotherHandler} answer={this.state.answers} botherOptions={this.state.bothering} show={this.state.first} appear={this.state.preBother} menu={this.props.menu} />
                
                <BotherPost answerChange={this.postBotherHandler} answer={this.state.answers} botherOptions={this.state.bothering} appear={this.props.post} show={this.state.postBother} />
                
                <Results pre={this.state.preBother} post={this.state.postBother} />
            </Aux>
        )
    }
}

export default PreQuestion;
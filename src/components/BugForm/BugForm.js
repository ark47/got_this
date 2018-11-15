import React, { Component } from 'react';
import classes from './BugForm.css';
import axios from '../../axios-bugs';

class BugForm extends Component {
    state = {
        value: '',
    }

    changeHandler = (event) => {
        this.setState({
            value: event.target.value
        });
    }

    submitHandler = (event) => {
        event.preventDefault();

        const data = {
            issue: this.state.value
        }

        axios.post('/bugs.json', data).then(response => {
            console.log(response);
        }).catch(error => console.log(error));

        this.setState({
            value: ''
        });
    }

    render () {
        return (
            <div style={{transform: this.props.show ? 'translateY(0)' : 'translateY(-200vh)', opacity: this.props.show ? '1' : '0', display: this.props.show ? 'inherit' : 'hidden'}} className={classes.BugForm}>
                <div className={classes.Close} onClick={this.props.close}></div>
                <h2>Report Bug</h2>

                <form onSubmit={this.submitHandler}>
                    <textarea value={this.state.value} onChange={this.changeHandler} placeholder="Enter details of the issue here."/>
                    <div onClick={this.props.close} style={{display: 'block'}}><input type="submit" value="Submit" /></div>
                </form>

            </div>
        );
    }
}

export default BugForm;
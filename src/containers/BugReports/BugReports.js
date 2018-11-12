import React, {Component} from 'react';
import BugReport from '../../components/BugReport/BugReport';
import axios from '../../axios-bugs';
import classes from './BugReports.css';

class BugReports extends Component {
    state = {
        bugs: []
    }

    componentDidMount() {
        axios.get('/bugs.json')
        .then(response => {
            const fetchedBugs = [];
            for (let key in response.data) {
                fetchedBugs.push({
                    ...response.data[key],
                    id: key
                });
            }
            this.setState({bugs: fetchedBugs});
            console.log(fetchedBugs);
        })
        .catch(error => {
            console.log(error);
        });
    }

    render () {
        return (
            <div className={classes.BugReports}>
                <h2>Bug Reports</h2>
                {this.state.bugs.map((bug, i) => (
                    <BugReport key={bug.id} issue={bug.issue} index={i+1} />
                ))}
            </div>
        );
    }

}

export default BugReports;
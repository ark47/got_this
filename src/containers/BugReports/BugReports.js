import React, {Component} from 'react';
import BugReport from '../../components/BugReport/BugReport';
import axios from '../../axios-bugs';
import classes from './BugReports.css';

export class BugReports extends Component {
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
        })
        .catch(error => {
            console.log(error);
        });
    }

    render () {
        let bugs = 'There are zero known bugs at this time.';
        if (this.state.bugs.length > 0) {
            bugs = this.state.bugs.map((bug, i) => (
                <BugReport key={bug.id} issue={bug.issue} index={i+1} />
            ))
        }

        return (
            <div className={classes.BugReports}>
                <h2>Bug Reports</h2>
                {bugs}
            </div>
        );
    }

}

export default BugReports;
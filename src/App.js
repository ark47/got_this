import React, { Component } from 'react';
import Layout from './containers/Layout/Layout';
import BugReports from './containers/BugReports/BugReports';
import {Route} from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Route path="/bugs" component={BugReports} />
        <Route path="/" exact component={Layout} />
      </div>
    );
  }
}

export default App;

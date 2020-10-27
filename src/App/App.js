import React, { Component } from 'react'
import Landing from '../Pages/Landing/Landing';
import Leaderboard from '../Pages/Leaderboard/Leaderboard';
import Login from '../Pages/Login/Login'
import Quiz from '../Pages/Quiz/Quiz';
import Registration from '../Pages/Registration/Registration'
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path={'/'} component={Landing} />
        <Route exact path={'/app'} component={Registration} />
        <Route path={'/app/login'} component={Login} />
      </div>
    );
  }
}

export default withRouter(App);

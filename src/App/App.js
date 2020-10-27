import React, { Component } from 'react'
import Landing from '../Pages/Landing/Landing';
import Leaderboard from '../Pages/Leaderboard/Leaderboard';
import Login from '../Pages/Login/Login'
import Trivia from '../Pages/Trivia/Trivia';
import Registration from '../Pages/Registration/Registration'
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import './App.css';
import Header from '../Components/Header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path={'/'} component={Landing} />
        <Route path={'/app'} component={Header} />
        <Route exact path={'/app'} component={Registration} />
        <Route exact path={'/app/login'} component={Login} />
        <Route exact path={'/app/trivia'} component={Trivia} />
        <Route exact path={'/app/leaderboard'} component={Leaderboard} />
      </div>
    );
  }
}

export default withRouter(App);

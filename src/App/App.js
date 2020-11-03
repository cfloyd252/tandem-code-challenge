import React, { Component } from 'react'
import Landing from '../Routes/Landing/Landing';
import Leaderboard from '../Routes/Leaderboard/Leaderboard';
import Login from '../Routes/Login/Login'
import Trivia from '../Routes/Trivia/Trivia';
import Registration from '../Routes/Registration/Registration'
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import './App.css';
import Header from '../Components/Header/Header';
import PrivateRoute from '../Utilities/PrivateRoute';
import PublicOnlyRoute from '../Utilities/PublicOnlyRoute';

class App extends Component {
  render() {
    return (
      <main id="App">
        <Route exact path={'/'} component={Landing} />
        <Route path={'/app'} component={Header} />
        <PublicOnlyRoute exact path={'/app'} component={Registration} />
        <PublicOnlyRoute exact path={'/app/login'} component={Login} />
        <PrivateRoute exact path={'/app/trivia'} component={Trivia} />
        <Route exact path={'/app/leaderboard'} component={Leaderboard} />
      </main>
    );
  }
}

export default withRouter(App);

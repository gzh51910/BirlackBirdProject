import React, { Component } from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import './App.scss';

import Home from './pages/Home';
import Login from './pages/Login';
import Circuit from './pages/Circuit';
import CircuitDetails from './pages/CircuitDetails';
import Competition from './pages/Competition';
import CompetitionDetails from './pages/CompetitionDetails';
import Download from './pages/Download';
import Help from './pages/Help';
import Summarize from './pages/Summarize';
import TeamGames from './pages/TeamGames';


class App extends Component {
  render() {
    return (
      <div id="subject">
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/circuit" component={Circuit} />
          <Route path="/circuitdetails" component={CircuitDetails} />
          <Route path="/competition" component={Competition} />
          <Route path="/competitiondetails" component={CompetitionDetails} />
          <Route path="/download" component={Download} />
          <Route path="/help" component={Help} />
          <Route path="/summarize" component={Summarize} />
          <Route path="/teamgames" component={TeamGames} />
          <Route path="/notfound" render={() => <div>404页面</div>} />
          <Redirect from="/" to="/home" exact />
          <Redirect to="/notfound" />
        </Switch>
      </div>
    )
  }
}

export default App;

import React, { Component } from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import './App.css';

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

import { Drawer, Button, Radio } from 'antd';

const RadioGroup = Radio.Group;
class App extends Component {
  state = { visible: false, placement: 'top' };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };


  render() {
    return (
      <div>
        <div>
        <Button type="primary" onClick={this.showDrawer}>
          Open
        </Button>
        <Drawer
          title="Basic Drawer"
          placement={this.state.placement}
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </div>

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
        <footer>
          <aside>
            <h4>下载</h4>
          </aside>
        </footer>
      </div>
    )
  }
}
export default App;

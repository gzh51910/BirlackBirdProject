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

import AppHeader from './components/Home_header';
import { Drawer, Button, Radio, Collapse, Icon,Input } from 'antd';
const { Panel } = Collapse;
const RadioGroup = Radio.Group;

class App extends Component {
  state = { visible: false, placement: 'top', position: 'relative' };

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

  onChange = e => {
    this.setState({
      placement: e.target.value,
    });
  };


  render() {
    return (
      <div>
        <header>
          <Collapse defaultActiveKey={['2']} >
            <Panel showArrow={false} header={<AppHeader />} key="1" style={{ background: '#333' }}>
              <p>线路</p>
              <p>赛事</p>
              <p>实景系统</p>
              <p>小结</p>
              <p>下载</p>
              <p>帮助</p>
              <aside><button>制作路书</button><button>号码牌</button></aside>
              <div style={{ marginBottom: 16 }}>
                <Input addonBefore="搜索" addonAfter={<Icon type="search" />} defaultValue="mysite" />
              </div>
            </Panel>
          </Collapse>
        </header>


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

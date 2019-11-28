import React, { Component } from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import NewsThing from './pages/NewsThing';
import AboutUs from './pages/AboutUs';
import Cartoon from './pages/Cartoon';
import DogTest from './pages/DogTest';
import ThingList from './pages/ThingList';


class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/newsthing" component={NewsThing} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/cartoon" component={Cartoon} />
          <Route path="/dogtest" component={DogTest} />
          <Route path="/thinglist" component={ThingList} />
          <Route path="/notfound" render={() => <div>404页面</div>} />
          <Redirect from="/" to="/home" exact />
          <Redirect to="/notfound" />
        </Switch>
      </div>
    )
  }
}

export default App;

import React, { Component } from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import './App.scss';
import axios from 'axios';

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
import RealSystem from './pages/RealSystem';
import NumberPlate from './pages/NumberPlate';
import NumberPlateEnter from './pages/NumberPlateEnter';

import Android from './img/download-android.png'
import Iphone from './img/download-iphone.png'
import WeiXin from './img/weixin_gongzhonghao.png'
import Enlist from './pages/Enlist';

import AppHeader from './components/Home_header';
import { Drawer, Button, Radio, Collapse, Icon, Input } from 'antd';
import { log } from 'util';
import { withToken } from './utils/hoc';
import $ from 'jquery'
const { Panel } = Collapse;
const RadioGroup = Radio.Group;

class App extends Component {

  state = {
    currentPath: '/home',
    defaultActiveKey: ['2'],
    Authorization:"",
    menu: [
      {
        name: 'circuit',
        path: '/circuit',
        text: "线路"
      }, {
        name: "competition",
        path: '/competition',
        text: '赛事'
      }, {
        name: 'realsystem',
        path: '/realsystem',
        text: '实景系统'
      }, {
        name: 'summarize',
        path: '/summarize',
        text: '小结'
      }, {
        name: 'download',
        path: '/download',
        text: '下载'
      }, {
        name: 'help',
        path: '/help',
        text: '帮助'
      }
    ]
  };
  fontSize1 = { fontSize: "12px" }
  // showDrawer = () => {
  //   this.setState({
  //     visible: true,
  //   });
  // };

  // onClose = () => {
  //   this.setState({
  //     visible: false,
  //   });
  // };

  // onChange = e => {
  //   this.setState({
  //     placement: e.target.value,
  //   });
  // };

  goto = (path) => {
    this.props.history.push(path)
    let { defaultActiveKey } = this.state
    defaultActiveKey = ['1']
    this.setState({
      defaultActiveKey,
    });
  }
  async componentDidMount() {
    let {Authorization} = this.props
    this.setState({
      Authorization,
    });
    console.log(Authorization);
    
    axios.get('http://localhost:1910/verify', {
      params: {
        Authorization:Authorization
      }
    }).then(({ data }) => {
      console.log(data);
      
      if(data.state == 1){
        $('.Login').css("display","none")
        $('.title_img').css("display","block")
      }else{
        $('.Login').css("display","block")
        $('.title_img').css("display","none")
      }
    })
  }
  render() {
    let { defaultActiveKey } = this.state
    
    return (

      <div>
        <header >
          <Collapse defaultActiveKey={defaultActiveKey}>
            <Panel showArrow={false} header={<AppHeader />} key="1" style={{ background: '#333', color: '#9d9d9d', padding: '0' }}>
              <nav style={{ color: '#9d9d9d', background: '#333', margin: 0, padding: "10px" }}>
                <ul className="App_head">
                  {
                    this.state.menu.map(item => {
                      return <li key={item.path} onClick={this.goto.bind(this, item.path)}>
                        {item.text}
                      </li>
                    })
                  }
                </ul>
                <p> <Button>制作路书</Button> <Button onClick={() => { this.props.history.push('/numberplate') }}>号码牌</Button></p>
                <p style={{ marginBottom: 16 }}>
                  <Input addonBefore="搜索" addonAfter={<Icon type="search" />} defaultValue="线路名称，路书ID" />
                </p>
                <p onClick={this.goto.bind(this, '/login')} className="Login">登录</p>
                <div className="title_img">
                  <img src="http://thirdqq.qlogo.cn/g?b=oidb&k=ibiamURibTcUvncfiajHO1HnKg&s=100&t=1565884347" />
                </div>
              </nav>
            </Panel>
          </Collapse>
        </header>
        <div id="subject">
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/circuit" component={Circuit} />
            <Route path="/realsystem" component={RealSystem} />
            <Route path="/circuitdetails/:id" component={CircuitDetails} />
            <Route path="/competition" component={Competition} />
            <Route path="/competitiondetails/:id" component={CompetitionDetails} />
            <Route path="/download" component={Download} />
            <Route path="/help" component={Help} />
            <Route path="/summarize" component={Summarize} />
            <Route path="/teamgames" component={TeamGames} />
            <Route path="/enlist" component={Enlist} />
            <Route path="/numberplate" component={NumberPlate} />
            <Route path="/numberplateenter/:id" component={NumberPlateEnter} />
            <Route path="/notfound" render={() => <div>404页面</div>} />
            <Redirect from="/" to="/home" exact />
            <Redirect to="/notfound" />
          </Switch>
        </div>
        <footer style={{ marginTop: "10px", borderTop: "1px solid #364d79" }}>
          <section style={{ padding: '0 15px' }}>
            <aside >
              <h3>下载</h3>
              <ul style={{ padding: 0 }}>
                <li style={{ listStyle: "none" }}><a href="http://www.blackbirdsport.com/public/download/apk/blackbird_bike?version=current">
                  <img src={Android} title="安卓下载" /></a></li>
                <li style={{ listStyle: "none" }}><a href="https://itunes.apple.com/cn/app/hei-niao-dan-che/id714004498?ls=1&mt=8">
                  <img src={Iphone} title="苹果下载" /></a></li>
              </ul>
              <a href="http://download.blackbirdsport.com/apk/%E7%A0%81%E8%A1%A8%E5%B7%A5%E5%85%B7.apk"><Button>码表工具</Button></a>
            </aside>
            <aside >
              <h3>关注</h3>
              <p style={this.fontSize1}>官方微博：<span style={{ color: "#999" }}>@黑鸟单车</span></p>
              <p style={this.fontSize1}>QQ:255499016 黑鸟</p>
              <div style={this.fontSize1}>微信公众号：黑鸟单车 <img src={WeiXin} style={{ display: "inline-block", verticalAlign: " middle" }} /></div>
            </aside>
            <aside>
              <h3>服务</h3>
              <ul style={{ padding: 0 }}>
                <li style={{ listStyle: "none", fontSize: "12px", color: "#999" }}>服务提供商</li>
                <li style={{ listStyle: "none", fontSize: "12px", color: "#999" }}>赛事主办方</li>
                <li style={{ listStyle: "none", fontSize: "12px", color: "#999" }}>产品经销商</li>
              </ul>
            </aside>
            <aside>
              <h3>说明书</h3>
              <p><a style={{ listStyle: "none", fontSize: "12px", color: "#999" }} href="http://www.blackbirdsport.com/public/docs/computer">码表说明书</a></p>
            </aside>
            <aside>
              <h3>&nbsp;</h3>
              <p style={{ listStyle: "none", fontSize: "12px", color: "#999", margin: '0' }}>黑鸟单车——您的骑行伴侣</p>
              <p style={this.fontSize1}>©2015 <span style={{ color: "#999" }}>京ICP备10005549号</span>，北京黑鸟科技有限公司， 保留所有。</p>
            </aside>
          </section>
        </footer>

      </div>
    )
  }
}
App = withRouter(App);
App = withToken(App);
export default App;
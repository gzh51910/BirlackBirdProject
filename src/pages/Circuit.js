import React,{Component} from 'react';
import './Circuit.scss';
import 'antd/dist/antd.css';
import { Tabs,Button, Icon } from 'antd';

const { TabPane } = Tabs;


class Circuit extends Component{
 
    render(){
        return(
            <div>
               <div className="Sum-Top">
                     <div className="Sum-Top-center">
                        <h4>黑鸟单车</h4>
                        <p></p>
                        <span>骑友最常去的地方。周末休闲，或是长途旅行。提供路书、服务站、领骑等信息。</span>

                     </div>
               </div>
               <div className="Sum-Center">
                  <p><img src="http://www.blackbirdsport.com/static/img/route-func1.gif"></img></p>
                  <h3>领骑</h3>
                  <h4>当地俱乐部提供的专业领骑服务。</h4>
                  <p><img src="http://www.blackbirdsport.com/static/img/route-func2.gif"></img></p>
                  <h3>路书</h3>
                  <h4>全网最热门的路书,保证不会迷路。</h4>
                  <p><img src="http://www.blackbirdsport.com/static/img/route-func3.gif"></img></p>
                  <h3>服务站</h3>
                  <h4>沿途服务站，提供专业后援。补给、休息、单车保养。</h4>
            </div>
            <div className="Sum-Main">
            <Tabs  type="card">
                  <TabPane tab="经典路线" key="1">
                      <div className="Sum-Img">
                        <img src="http://image.blackbirdsport.com/routes/year_2015/20151127/12335_1448555621847.jpeg"></img>
                        <div className="Sum-text">
                             <h3>318川藏线</h3>
                             <i><Icon type="environment" />成都</i>
                        </div>
                      </div>
                      <div className="Sum-Img">
                        <img src="http://image.blackbirdsport.com/routes/year_2015/20151127/12335_1448555621847.jpeg"></img>
                        <div className="Sum-text">
                             <h3>318川藏线</h3>
                             <i><Icon type="environment" />成都</i>
                        </div>
                      </div>
                  </TabPane>
                  <TabPane tab="附近路线" key="2">
                    附近还没有线路哦，创建一个吧！ 
                     <Button type="primary">创建线路</Button>
                  </TabPane>
                </Tabs>
              </div>
              </div>
);

            
        
        
    }
    
}

export default Circuit
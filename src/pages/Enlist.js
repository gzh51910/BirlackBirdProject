import React,{Component} from 'react';
import './Enlist.scss';
import { Menu , Form, Input, Button, Radio} from 'antd';

const { SubMenu } = Menu;

class Enlist extends Component{
    constructor() {
        super();
        this.state = {
          formLayout: 'horizontal',
        };
      }
    
      handleFormLayoutChange = e => {
        this.setState({ formLayout: e.target.value });
      };
    
     render(){
        const { formLayout } = this.state;
        const formItemLayout =
          formLayout === 'horizontal'
            ? {
                labelCol: { span: 4 },
                wrapperCol: { span: 14 },
              }
            : null;
        const buttonItemLayout =
          formLayout === 'horizontal'
            ? {
                wrapperCol: { span: 14, offset: 4 },
              }
            : null;
         return(
             <div className="Enlist">
                 <div className="content">
                 <div className="Enlist_header">
                  <img src="http://www.blackbirdsport.com/static/img/activetyMatch-enroll.svg" className="image1"></img>
                   <div className="staus">
                       <img src="http://www.blackbirdsport.com/static/img/fill-info.svg"></img>
                       <img src="http://www.blackbirdsport.com/static/img/confirm-payment.svg"></img>
                       <img src="http://www.blackbirdsport.com/static/img/enroll-success.svg"></img>
                   </div>
                      <p>
                       比赛时间:<span>2019.12.29 Sun 10:00</span>
                               </p>
                      <p>
                       地点:<span>高坪风景区</span> 
                      </p>
                      <p>分组:</p>
                     </div>
                 <div className="Enlist-main">
                 <div className="Enlist-list">
                     <div className="Enlist-list-item">
                         <p>精英组</p>
                         </div>
                     <ul>
                         <li>
                             <label>人数:</label>
                             <span>50</span>
                         </li>
                         <li>
                             <label>费用:</label>
                             <span>98.0元</span>     
                         </li>
                         <li>
                             <span>38-65岁</span>
                         </li>
                     </ul>
                 </div>
                 <div className="Enlist-list">
                     <div className="Enlist-list-item">
                         <p>大师组</p>
                         </div>
                     <ul>
                         <li>
                             <label>人数:</label>
                             <span>50</span>
                         </li>
                         <li>
                             <label>费用:</label>
                             <span>98.0元</span>     
                         </li>
                         <li>
                             <span>18-50岁</span>
                         </li>
                     </ul>
                 </div>
                 <div className="Enlist-list">
                     <div className="Enlist-list-item">
                         <p>巾帼组</p>
                         </div>
                     <ul>
                         <li>
                             <label>人数:</label>
                             <span>50</span>
                         </li>
                         <li>
                             <label>费用:</label>
                             <span>98.0元</span>     
                         </li>
                         <li>
                             <span>18-65岁</span>
                         </li>
                     </ul>
                 </div>
                 <div className="Enlist-list">
                     <div className="Enlist-list-item">
                         <p>逍遥组</p>
                         </div>
                     <ul>
                         <li>
                             <label>人数:</label>
                             <span>50</span>
                         </li>
                         <li>
                             <label>费用:</label>
                             <span>98.0元</span>     
                         </li>
                         <li>
                             <span>16-65岁</span>
                         </li>
                     </ul>
                 </div>
                 </div>
                 <h2>报名信息</h2>
                 <div className="enroll-tip">
                   请确保填写信息真实准确，否则会影响您比赛的顺利进行
                    </div>
                    <div className="main1">
                    <label>
                        <span>*</span>
                        组别/Category
                    </label>
                    <Menu
                          onClick={this.handleClick}
                         
                         defaultSelectedKeys={['1']}
                         defaultOpenKeys={['sub1']}
                             mode="inline"
       >
                          <SubMenu style={{ width: "100%" }} 
                              key="sub2"
                              title={
                              <span >
                               <span>巾帼组</span>
                                      </span>
                                 }
                            >
                            <Menu.Item key="1">精英组</Menu.Item>
                            <Menu.Item key="2">大师组</Menu.Item>
                            <Menu.Item key="3">巾帼组</Menu.Item>
                            <Menu.Item key="4">逍遥组</Menu.Item>
                        </SubMenu>
                        </Menu>
                        </div>
                        <div className="main2">
                      <input type="checkbox"></input>
                      <span>代人报名</span>
                      </div>
                      <div>
        <div className="main3">
        <Form layout={formLayout}>
          <Form.Item  {...formItemLayout}>
              <label>
                  <span>*</span>
                   姓名/name
              </label>
            <Input/>
          </Form.Item>
          <Form.Item {...formItemLayout}>
               <label>
                  <span>*</span>
                  电话/Tel
              </label>
            <Input />
          </Form.Item>
          <Form.Item {...formItemLayout}>
              <label>
                  <span>*</span>
                  所属车队/俱乐部
              </label>
            <Input/>
          </Form.Item>
          <Form.Item {...formItemLayout}>
              <label>
                  <span>*</span>
                  身份证号
              </label>
            <Input />
          </Form.Item>
          <Form.Item {...formItemLayout}>
             <label>
                  <span>*</span>
                  紧急联系人电话/Emergency contact telephone
              </label>
            <Input />
          </Form.Item>
        </Form>
          <div className="main4">
                      <input type="checkbox"></input>
                      <span>我已阅读并同意相关<i>《免责声明》</i>条款</span>
                      </div>
                      <div>
            <div className="main5">
                <i>￥98</i>
                <span>提交报名</span>
            </div>
            </div>
      </div>
      </div>
             </div>
             </div>
         
         )
     }

}

export default Enlist
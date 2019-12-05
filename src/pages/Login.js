import React, { Component } from 'react';
import axios from 'axios';
import { mainUrl } from "../config.json";
import '../scss/Login.min.css'
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';

class Login extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        // console.log('Received values of form: ', values);
        let { data } = await axios.get(mainUrl + '/login', {
          params: {
            gather: "user",
            username: values.username,
            password: values.password
          }
        });
        console.log(data);
        if (data.msg == "success") {
          let Authorization = data.data
          localStorage.setItem('Authorization',Authorization);
          this.props.history.push(`/Home`)
        } else {
          message.error('输入密码有误或用户不存在！');
        }
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div id="login_main">
        <h1>登录</h1>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: '请输入用户名!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="手机/邮箱"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="密码"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox style={{ width: "100%", padding: "10px" }}>一个月内自动登录（公共场所慎选）</Checkbox>)}
            <a className="login-form-forgot" href="">
              忘记密码
              </a>
            <Button type="primary" htmlType="submit" className="login-form-button">
              登录
              </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}
Login = Form.create({ name: 'normal_login' })(Login);
export default Login;
/*
* @Author: Administrator
* @Date:   2018-03-15 16:23:38
* @Last Modified by:   Administrator
* @Last Modified time: 2018-03-29 17:10:47
*/

import React from 'react';
import { Row, Col, Menu, Icon, Button, Tabs, message, Form, Input, CheckBox, Modal } from 'antd';
import { Router, Route, Link } from 'react-router-dom';

//用于表单提交
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

class PCHeader extends React.Component {
    constructor() {
        super();
        this.state = {
            current: 'top',
            modalVisible: false,
            action: 'login',
            hasLogined: false,
            userNickName: '',
            userid: 0
        }
    }
    ;
    //刷新时保持登录或登出的状态
    componentWillMount() {
        if (localStorage.userid != '') {
            this.setState({
                hasLogined: true
            });
            this.setState({
                userNickName: localStorage.userNickName,
                userid: localStorage.userid
            });
        }
    }
    ;
    handleSubmit(e) {
        //提交数据，注册或登录
        e.preventDefault(); //阻止事件冒泡
        var myFetchOptions = {
            method: 'GET'
        };
        var formData = this.props.form.getFieldsValue();
        // console.log(formData);
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=" + this.state.action + "&username=" + formData.userName + "&password=" + formData.password + "&r_userName=" + formData.r_userName + "&r_password=" + formData.r_password + "&r_confirmPassword=" + formData.r_passwordConfirm, myFetchOptions)
            .then(response => response.json()) //response是借口返回的内容，相当于回调函数中的传参
            .then(json => {
                this.setState({
                    userNickName: json.NickUserName, //由api返回
                    userid: json.UserId
                });
                localStorage.userid = json.UserId;
                localStorage.userNickName = json.NickUserName;
                //如果登录成功，将hasLogined置为true
                if (this.state.action == 'login') {
                    this.setState({
                        hasLogined: true
                    });
                }
                message.success('请求成功');
                this.setModalVisible(false);
            })
    }
    ;
    handleClick(e) {
        if (e.key == 'login') {
            this.setState({
                current: 'login'
            });
            this.setModalVisible(true);
        } else {
            this.setState({
                current: e.key
            });
        }
    }
    ;
    setModalVisible(value) {
        this.setState({
            modalVisible: value
        });
    }
    ;
    callback(key) {
        if (key == 'register') {
            this.setState({
                action: 'register'
            });
        } else if (key == 'login') {
            this.setState({
                action: 'login'
            });
        }
    }
    ;
    logout() {
        localStorage.userid = '';
        localStorage.userNickName = '';
        this.setState({
            hasLogined: false
        });
    }
    ;
    render() {
        //定义一个全局变量来接收form表单的参数
        let {getFieldDecorator} = this.props.form;
        const userShow = this.state.hasLogined
            ?
            <Menu.Item key="logout" className="register">
              <Button type="primary">{this.state.userNickName}</Button>
              <Button type="dashed" htmlType="button">个人中心</Button>
              <Button type="danger" onClick={this.logout.bind(this)}>退出</Button>
            </Menu.Item>
            :
            <Menu.Item key="login" className="register" onClick={this.setModalVisible.bind(this)}>
              <Button type="primary" htmlType="button">登录 / 注册</Button>
            </Menu.Item>;

        return (
            <header>
            <Row>
              <Col span={2}></Col>
              <Col span={4}>
                <a href="/" className="logo">
                  <img src="/src/images/news_icon.png" alt="logo"/>
                  <span>ReactNews</span>
                </a>
              </Col>
              <Col span={16}>
                <Menu mode="horizontal" selectedKeys={[this.state.current]} onClick={this.handleClick.bind(this)}>
                  <Menu.Item key="top">
                    <Icon type="appstore"></Icon>
                    头条
                  </Menu.Item>
                  <Menu.Item key="shehui">
                    <Icon type="appstore"></Icon>
                    社会
                  </Menu.Item>
                  <Menu.Item key="guonei">
                    <Icon type="appstore"></Icon>
                    国内
                  </Menu.Item>
                  <Menu.Item key="guoji">
                    <Icon type="appstore"></Icon>
                    国际
                  </Menu.Item>
                  <Menu.Item key="yule">
                    <Icon type="appstore"></Icon>
                    娱乐
                  </Menu.Item>
                  <Menu.Item key="tiyu">
                    <Icon type="appstore"></Icon>
                    体育
                  </Menu.Item>
                  <Menu.Item key="keji">
                    <Icon type="appstore"></Icon>
                    科技
                  </Menu.Item>
                  <Menu.Item key="shishang">
                    <Icon type="appstore"></Icon>
                    时尚
                  </Menu.Item>
                  {userShow}
                </Menu>
            <Modal title="用户中心"
            wrapClassName="vertical-center-modal"
            visible={this.state.modalVisible}
            onCancel= {() => this.setModalVisible(false)}
            onOk = {() => this.setModalVisible(false)}
            okText = "关闭"
            >
                    <Tabs type="card" onChange = {this.callback.bind(this)}>
                      <TabPane tab="注册" key="register">
                        <Form layout = "horizontal" onSubmit={this.handleSubmit.bind(this)}>
                          <FormItem label="账户">
                            {getFieldDecorator('r_userName')(<Input placeholder="请输入您的账号"></Input>)}
                          </FormItem>
                          <FormItem label="密码">
                            {getFieldDecorator('r_password')(<Input type="password" placeholder="请输入您的密码"></Input>)}
                          </FormItem>
                          <FormItem label="确认密码">
                            {getFieldDecorator('r_passwordConfirm')(<Input type="password" placeholder="请再次输入密码"></Input>)}
                          </FormItem>
                          <Button type="primary" htmlType="submit">注册</Button>
                        </Form>
                      </TabPane>
                      <TabPane tab="登录" key="login">
                        <Form layout = "horizontal" onSubmit={this.handleSubmit.bind(this)}>
                          <FormItem label="账户">
                            {getFieldDecorator('userName')(<Input placeholder="请输入您的账号"></Input>)}
                          </FormItem>
                          <FormItem label="密码">
                            {getFieldDecorator('password')(<Input type="password" placeholder="请输入您的密码"></Input>)}
                          </FormItem>
                          <Button type="primary" htmlType="submit">登录</Button>
                        </Form>
                      </TabPane>
                    </Tabs>

                  </Modal>
              </Col>
              <Col span={2}>
              </Col>
            </Row>
          </header>
        );
    }
    ;
}
export default PCHeader = Form.create({})(PCHeader);
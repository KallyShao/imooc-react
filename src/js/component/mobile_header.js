/*
* @Author: Kally Shao
* @Date:   2018-03-15 16:23:57
* @Last Modified by:   Kally Shao
* @Last Modified time: 2018-03-20 17:43:15
*/

import React from 'react';
import { Row, Col, Menu, Icon, Button, Tabs, message, Form, Input, CheckBox, Modal, Link } from 'antd';

//用于表单提交
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

class MobileHeader extends React.Component {
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
    handleSubmit(e) {
        //提交数据，注册或登录
        e.preventDefault(); //阻止事件冒泡
        var myFetchOptions = {
            method: 'GET'
        };
        var formData = this.props.form.getFieldsValue();
        // console.log(formData);
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=register&username=userName&password=password&r_userName=" + formData.r_userName + "&r_password=" + formData.r_password + "&r_confirmPassword=" + formData.r_passwordConfirm, myFetchOptions)
            .then(response => response.json()) //response是借口返回的内容，相当于回调函数中的传参
            .then(json => {
                this.setState({
                    userNickName: json.NickUserName, //由api返回
                    uerid: json.UserId
                });
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
        })
    }
    ;
    login() {}
    ;
    render() {
        //定义一个全局变量来接收form表单的参数
        let {getFieldDecorator} = this.props.form;
        const userShow = !this.state.hasLogined
            ?
            <Link>
                <Icon type="inbox"></Icon>
            </Link>
            :
            <Link>
                <Icon type="settng" onClick = {this.login.bind(this)}></Icon>
            </Link>;

        return (
            <header id="mobile-header">
                <img src="./src/images/news_icon.png" alt="logo"/>
                <span>ReactNews</span>
                {userShow}

                <Modal title="用户中心"
            wrapClassName="vertical-center-modal"
            visible={this.state.modalVisible}
            onCancel= {() => this.setModalVisible(false)}
            onOk = {() => this.setModalVisible(false)}
            okText = "关闭"
            >
                    <Tabs type="card">
                      <TabPane tab="注册">
                        <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
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
                    </Tabs>
                </Modal>
            </header>
        );
    }
    ;
}
export default MobileHeader = Form.create({})(MobileHeader);
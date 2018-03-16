/*
* @Author: Administrator
* @Date:   2018-03-15 16:23:38
* @Last Modified by:   Kally Shao
* @Last Modified time: 2018-03-16 17:21:27
*/

import React from 'react';
import { Row, Col, Menu, Icon, Button, Tabs, message, Form, Input, CheckBox, Modal } from 'antd';

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
    handleSubmit() {}
    ;
    setModalVisible(value) {
        this.state = {
            modalVisible: value
        }
    }
    ;
    render() {
        //定义一个全局变量来接收form表单的参数
        let {getFieldDecorator} = this.props.form;
        const userShow = this.state.hasLogined
            ?
            <Menu.Item key="logout" className="register">
	    		<Button type="primary">{this.state.userNickName}</Button>
	    		<Link target="_blank">
	    			<Button type="dashed" htmlType="button">个人中心</Button>
	    		</Link>
	    		<Button type="ghost">退出</Button>
    		</Menu.Item>
            :
            <Menu.Item key="login" className="register" onClick={this.setModalVisible.bind(this)}>
    			<Button type="primary" htmlType="button">登录 / 注册</Button>
    		</Menu.Item>
        return (
            <header>
      			<Row>
      				<Col span={2}></Col>
      				<Col span={4}>
      					<a href="/" className="logo">
      						<img src="./src/images/news_icon.png" alt="logo"/>
      						<span>ReactNews</span>
      					</a>
      				</Col>
      				<Col span={16}>
						<Menu mode="horizontal" selectedKeys={[this.state.current]}>
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
            				<Tabs type="card">
            					<TabPane tab="注册">
            						<Form horizontal onSubmit={this.handleSubmit.bind(this)}>
            							<FormItem label="账户">
	            							{getFieldDecorator('r_userName')(<Input placeholder="请输入您的账号"></Input>)};
            							</FormItem>
            							<FormItem label="密码">
	            							{getFieldDecorator('r_password')(<Input placeholder="请输入您的密码"></Input>)};
            							</FormItem>
            							<FormItem label="确认密码">
	            							{getFieldDecorator('r_passwordConfirm')(<Input placeholder="请再次输入密码"></Input>)};
            							</FormItem>
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
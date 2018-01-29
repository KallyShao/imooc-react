/*
 * @Author: Administrator
 * @Date:   2018-01-15 19:03:12
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-01-29 21:00:45
 */

import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import ReactMixin from 'react-mixin';

import BodyChild from './bodyChild.js';
import FooterIndex from './footer.js';
import MixinLog from './mixins';

import {
	Input
} from 'antd';

const defaultProps = {
	username: '默认用户名'
};

export default class Body extends React.Component {
	constructor() {
		super();
		this.state = {
			username: 'kally',
			age: 88
		}; //初始化赋值
	};

	changeUserInfo(age) {
		// this.setState({
		// 	age: age
		// });
		// var ele = document.getElementById('btn');
		// console.log(ele);
		// ReactDOM.findDOMNode(ele).style.background = 'red';
		// console.log(this.refs.btn);
		// this.refs.btn.style.background = 'red';	

		MixinLog.log();
	}
	changeHandler(event) {
		this.setState({
			age: event.target.value
		});
	};

	render() {
		//通过一个定时器来改变state
		return (
			<div>
            	<h2> 页面的主体内容 </h2> 
            	<p>username: { this.props.username }/ userid: {this.props.userid}</p> 
            	<p>{this.state.age}</p>
            	<Input placeholder="Basic usage" />
            	<input type="button" id="btn" ref="btn" value="提交" onClick={this.changeUserInfo.bind(this)} />
                <BodyChild {...this.props} id="89000" changeHandler={this.changeHandler.bind(this)} />
                <FooterIndex />
            </div>
		)
	};
}

Body.propTypes = {
	userid: PropTypes.number.isRequired
};

Body.defaultProps = defaultProps;

ReactMixin(Body.prototype, MixinLog);
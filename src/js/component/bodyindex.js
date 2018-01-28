/*
 * @Author: Administrator
 * @Date:   2018-01-15 19:03:12
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-01-28 21:46:34
 */

import React from "react";
import BodyChild from './bodyChild.js';

export default class Body extends React.Component {
	constructor() {
		super();
		this.state = {
			username: 'kally',
			age: 88
		}; //初始化赋值
	};

	changeUserInfo(age) {
		this.setState({
			age: age
		});
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
            	<p>{ this.state.username }{this.props.userid}</p> 
            	<p>{this.state.age}</p>
            	<input type="button" value="提交" onClick={this.changeUserInfo.bind(this)} />
                <BodyChild changeHandler={this.changeHandler.bind(this)}/>
            </div>
		)
	};
}
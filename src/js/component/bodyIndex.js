/*
 * @Author: Administrator
 * @Date:   2018-01-15 19:03:12
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-01-27 16:57:49
 */

import React from "react";

export default class Body extends React.Component {
	constructor() {
		super();
		this.state = {
			username: 'kally'
		}; //初始化赋值
	}
	render() {
		//通过一个定时器来改变state
		setTimeout(
			// function(){
			// 	console.log(this);
			// 	this.setState({username: 'xu'}) 
			// },
			() => {
				// console.log(this);
				this.setState({
					username: 'xu'
				});
			},

			3000);

		return (
			<div>
            <h2> 页面的主体内容 </h2> 
            <p> { this.state.username } </p> 
            </div>
		)
	}
}
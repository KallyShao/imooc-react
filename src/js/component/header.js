/*
 * @Author: Administrator
 * @Date:   2018-01-15 16:36:37
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-01-29 16:30:30
 */

import React from "react";
import ReactDOM from "react-dom";


class Header extends React.Component {
	constructor() {
		super();
		this.state = {
			miniHeight: false
		};
	}
	changeStyle() {
		this.setState({
			miniHeight: !this.state.miniHeight
		});
	}

	render() {
		const styleComponentHeader = {
			header: {
				backgroundColor: '#333',
				color: '#fff',
				paddingTop: (this.state.miniHeight) ? '100px' : '20px',
				paddingBottom: '30px'
			},
			// h1: {
			// 	color: 'red'
			// }
		};

		return (
			<div className="test">
				<header style={styleComponentHeader.header} onClick={this.changeStyle.bind(this)}> I am the Header! </header>
				<h1 style={styleComponentHeader.h1}>I am the h1 tag in the Header!</h1>
			</div>
		)
	}
}

export default Header;
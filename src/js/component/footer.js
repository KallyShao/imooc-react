/*
 * @Author: Administrator
 * @Date:   2018-01-29 17:24:28
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-01-29 17:42:15
 */

import React from 'react';
var footerStyle = require('../../style/footer.css');

export default class FooterIndex extends React.Component {
	render() {
		return (
			<div className={footerStyle.fs}>I am the footer</div>
		);
	}
}
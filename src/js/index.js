/*
* @Author: Administrator
* @Date:   2018-01-09 22:15:10
* @Last Modified by:   Administrator
<<<<<<< HEAD
* @Last Modified time: 2018-01-27 17:38:41
=======
* @Last Modified time: 2018-01-15 22:41:01
>>>>>>> aa1af3e3feb33a787a7391f4c2ac44f30d3fa690
*/

var React = require('react');
var ReactDOM = require('react-dom');

import Header from './component/header.js';
import Body from './component/bodyIndex.js';



class Index extends React.Component {
	render() {
		return (
			<div>
				<BodyIndex/>
				<h2>this is h1</h2>
				<p></p>
			</div>
		)
	}
}

ReactDOM.render(<Index/>, document.getElementById('test'));
/*
* @Author: Administrator
* @Date:   2018-01-09 22:15:10
* @Last Modified by:   Administrator
* @Last Modified time: 2018-01-15 22:41:01
*/

var React = require('react');
var ReactDOM = require('react-dom');
// import Header from './component/header.js';
import BodyIndex from './component/bodyindex.js';


class Index extends React.Component{
	render(){
		return (
			<div>
				<BodyIndex/>
				<h2>this is h1</h2>
			</div>
		)
	}
}

ReactDOM.render(<Index/>, document.getElementById('test'));
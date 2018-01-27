/*
* @Author: Administrator
* @Date:   2018-01-09 22:15:10
* @Last Modified by:   Administrator
* @Last Modified time: 2018-01-27 16:09:18
*/

var React = require('react');
var ReactDOM = require('react-dom');
import Header from './component/header.js';
import Body from './component/bodyIndex.js';


class Index extends React.Component{
	render(){
		return (
			<div>
				<Header/>
				<Body />
				<h2>this is h1</h2>
				<p></p>
			</div>
		)
	}
}

ReactDOM.render(<Index/>, document.getElementById('test'));
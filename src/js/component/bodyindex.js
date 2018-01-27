/*
* @Author: Administrator
* @Date:   2018-01-15 19:03:12
* @Last Modified by:   Administrator
* @Last Modified time: 2018-01-15 22:59:21
*/

import React from "react";

class BodyIndex extends React.Component{
	render(){
        var username = "kally";
        var bool = false;
        var html = "<h1>I am h1 tag</h1>"
		return(
            <div>
    			<div>I am the body</div>
                <p>{username ? 'xxx' : 'yyyy'}</p>
                <button type='button' disabled={bool}>默认按钮</button>
                <h1 dangerouslySetInnerHTML={{__html : html}}></h1>
            </div>
		)
	}
}

export default BodyIndex;
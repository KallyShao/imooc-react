/*
 * @Author: Administrator
 * @Date:   2018-01-28 08:00:48
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-01-28 18:09:14
 */

import React from 'react';
export default class BodyChild extends React.Component {

    render() {
        return (
            <div>
            子页面内容：<input type="text" onChange={this.props.changeHandler}/>
        </div>
        )
    }
}
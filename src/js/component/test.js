/*
* @Author: Administrator
* @Date:   2018-03-28 13:58:37
* @Last Modified by:   Administrator
* @Last Modified time: 2018-03-28 16:27:40
*/

import React from 'react';

export default class Test extends React.Component {
    constructor() {
        super()
        this.state = {
            isLiked: false
        }
    }
    handleClick() {
        this.setState({
            isLiked: !this.state.isLiked
        });
    }
    ;
    render() {
        const like = this.props.likeText || '点赞';
        const unlike = this.props.unLikeText || '取消';
        console.log(like, unlike);
        return (
            <div>
	            <button onClick={this.handleClick.bind(this)}>
	            	{this.state.isLiked ? unlike : like}
	            </button>
          	</div>
        );
    }
    ;
}


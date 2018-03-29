/*
* @Author: Administrator
* @Date:   2018-03-29 14:22:23
* @Last Modified by:   Administrator
* @Last Modified time: 2018-03-29 17:12:51
*/

import React from 'react';
import { Row, Col, List, Form, Input, Button, Card, Avatar } from 'antd';

const FormItem = Form.Item;

class CommonComments extends React.Component {
    constructor() {
        super();
        this.state = {
            comments: '',
            flag: false
        };
    }
    ;
    handleSubmit(e) {
        e.preventDefault();
        var myFetchOptions = {
            method: 'GET'
        };
        var formData = this.props.form.getFieldsValue();
        fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid=' + localStorage.userid + '&uniquekey=' + this.props.uniquekey + '&commnet=' + formData.remark, myFetchOptions)
            .then(response => response.json())
            .then(json => {
                //添加完评论后重新加载一下页面
                this.componentDidMount();
            });
    }
    ;
    componentDidMount() {
        var myFetchOptions = {
            method: 'GET'
        };
        fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=' + this.props.uniquekey, myFetchOptions)
            .then(response => response.json())
            .then(json => {
                this.setState({
                    comments: json
                });
            });
    }
    ;
    render() {
        let {getFieldDecorator} = this.props.form;
        const {comments} = this.state;
        const commentsList = comments.length
            ?
            <List
            header={<div>评论列表</div>}
            bordered
            dataSource={comments}
            renderItem={(item, index) => (<List.Item>
            	<List.Item.Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={item.UserName}
                description={item.Comments}
                />
            </List.Item>)} />
            :
            '暂时还没有评论';


        // const commentsList = comments.length
            //     ?
            //     comments.map((comment, index) => (
            //         <Card key={index} title={comment.UserName} extra={<a href="#">发表于{comment.datetime}</a>}>
            // 			<p>{comment.Comments}</p>
            // 		</Card>
            //     ))
            //     :
            //     '暂时还没有评论';

        return (
            <div className="comment">
            	<Row>
            		<Col span={2}></Col>
            		<Col span={20}>
						{commentsList}
						<Form onSubmit={this.handleSubmit.bind(this)}>
							<FormItem label="您的评论">
							  {getFieldDecorator('remark', {
                initialValue: ''
            })(<Input type="textarea" placeholder="随便写" />)}
							  <Button type="primary" htmlType="submit">提交评论</Button>
							</FormItem>
						</Form>
            		</Col>
            		<Col span={2}></Col>
            	</Row>
          	</div>
        );
    }
    ;
}

export default CommonComments = Form.create({})(CommonComments);
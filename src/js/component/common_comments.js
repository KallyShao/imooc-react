/*
* @Author: Administrator
* @Date:   2018-03-29 14:22:23
* @Last Modified by:   Administrator
* @Last Modified time: 2018-03-30 17:00:41
*/

import React from 'react';
import { Row, Col, List, Form, Input, Button, Card, Avatar, message } from 'antd';

const FormItem = Form.Item;
const {TextArea} = Input;

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
    //收藏文章
    handleCollect() {
        var myFetchOptions = {
            method: 'GET'
        };
        fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=uc&userid=' + localStorage.userid + '&uniquekey=' + this.props.uniquekey, myFetchOptions)
            .then(response => response.json)
            .then(json => {
                console.log(json);
                message.info('文章收藏成功!');
            });
    }
    ;
    //加载评论列表
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
                <div>发布于：<span className="comment-time">{item.datetime}</span></div>
            </List.Item>)} />
            :
            '暂时还没有评论';


        // const commentsList = comments.length
            //     ?
            //     comments.map((comment, index) => (
            //         <Card key={index} title={comment.UserName} extra={<a href="#">发表于{comment.datetime}</a>}>
            //          <p>{comment.Comments}</p>
            //      </Card>
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
            })(<TextArea rows={4} placeholder="随便写" className="comment-area"/>)}
                              <Button type="primary" htmlType="submit">提交评论</Button>
                              <Button className="collect" type="primary" htmlType="button" onClick={this.handleCollect.bind(this)}>收藏文章</Button>
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
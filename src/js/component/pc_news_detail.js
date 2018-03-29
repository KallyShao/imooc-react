/*
* @Author: Administrator
* @Date:   2018-03-27 14:11:40
* @Last Modified by:   Administrator
* @Last Modified time: 2018-03-29 16:35:33
*/

import React from 'react';
import { Row, Col, BackTop } from 'antd';
import { Router, Route, Link, browserHistory } from 'react-router-dom';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
import PCNewsImage from './pc_news_image';
import CommonComments from './common_comments';

export default class PCNewsDetail extends React.Component {
    constructor() {
        super();
        this.state = {
            newsItem: ''
        };
    }
    ;
    createMarkup() {
        return {
            __html: this.state.newsItem.pagecontent
        };
    }
    ;
    componentDidMount() {
        var myFetchOptions = {
            method: 'GET'
        };
        fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=' + this.props.match.params.uniquekey, myFetchOptions)
            .then(response => response.json())
            .then(json => {
                this.setState({
                    newsItem: json
                });
                document.title = this.state.newsItem.title + '- React News | React 驱动的新闻平台';
            });
    }
    ;
    render() {
        return (
            <div>
                <PCHeader></PCHeader>
                <Row>
                    <Col span={2}></Col>
                    <Col span={14} className="container">
                        <div className="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>
                    </Col>
                    <Col span={6} className="detail-right">
                        <PCNewsImage type="shehui" count="30" width="80%" cartTitle="相关新闻" imageWidth="120px"></PCNewsImage>
                    </Col>
                    <Col span={2}>
                        <BackTop></BackTop>
                    </Col>
                </Row>
                <CommonComments uniquekey={this.props.match.params.uniquekey}></CommonComments>
                <PCFooter></PCFooter>
            </div>
        );
    }
    ;
}
;
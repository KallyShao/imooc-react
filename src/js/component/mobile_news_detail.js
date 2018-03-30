/*
* @Author: Administrator
* @Date:   2018-03-29 13:59:13
* @Last Modified by:   Administrator
* @Last Modified time: 2018-03-30 09:42:04
*/
import React from 'react';
import { Row, Col, BackTop } from 'antd';
import { Router, Route, Link, browserHistory } from 'react-router-dom';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import CommonComments from './common_comments';

export default class MobileNewsDetail extends React.Component {
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
                <MobileHeader></MobileHeader>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} className="container">
                        <div className="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>
                    </Col>
                    <Col span={2}>
                        <BackTop></BackTop>
                    </Col>
                </Row>
                <CommonComments uniquekey={this.props.match.params.uniquekey}></CommonComments>
                <MobileFooter></MobileFooter>
            </div>
        );
    }
    ;
}
;
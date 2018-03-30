/*
* @Author: Administrator
* @Date:   2018-03-30 10:37:39
* @Last Modified by:   Administrator
* @Last Modified time: 2018-03-30 17:32:39
*/

import React from 'react';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
import CommonAvatar from './common_avatar';

import { Row, Col, Button, Tabs, List, Spin } from 'antd';
import { Link } from 'react-router-dom';

const TabPane = Tabs.TabPane;

export default class PCUserCenter extends React.Component {
    constructor() {
        super();
        this.state = {
            articleList: [],
            commentsList: [],
            loading: true,
            loadingMore: false,
            showLoadingMore: true
        };
    }
    ;

    //这里可以同时加载文章收藏和评论列表
    getData(callback1, callback2) {
        var myFetchOptions = {
            method: 'GET'
        };
        //获取用户的收藏列表
        fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=getuc&userid=' + localStorage.userid, myFetchOptions)
            .then(response => response.json())
            .then(json => {
                // this.setState({
                //  loading: false,
                //     articleList: json
                // });
                callback1(json);
            });

        //获取用户的评论列表
        fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=getusercomments&userid=' + localStorage.userid, myFetchOptions)
            .then(response => response.json())
            .then(json => {
                // this.setState({
                //  loading: false,
                //     articleList: json
                // });
                callback2(json);
            });
    }
    ;

    componentDidMount() {
        this.getData((res) => {
            this.setState({
                loading: false,
                articleList: res
            });
        }, (res) => {
            this.setState({
                loading: false,
                commentsList: res
            });
        });
    }
    ;
    onLoadMore() {
        this.setState({
            loadingMore: true
        });
        this.getData((res) => {
            const articleList = this.state.articleList.concat(res);
            this.setState({
                articleList,
                loadingMore: false
            }, () => {
                window.dispatchEvent(new Event('resize'));
            })
        }, (res) => {
            const commentsList = this.state.commentsList.concat(res);
            this.setState({
                commentsList,
                loadingMore: false
            }, () => {
                window.dispatchEvent(new Event('resize'));
            })
        });
    }
    ;


    render() {
        const {loading, loadingMore, showLoadingMore, articleList, commentsList} = this.state;
        const loadMore = showLoadingMore ? (
            <div style={{
                textAlign: 'center',
                marginTop: 12,
                height: 32,
                lineHeight: '32px'
            }}>
                {loadingMore && <Spin />}
                {!loadingMore && <Button onClick={this.onLoadMore.bind(this)}>加载更多</Button> }
            </div>
            ) : null;

        return (
            <div>
                <PCHeader></PCHeader>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20}>
                        <Tabs defaultActiveKey="collect">
                            <TabPane tab="我的收藏列表" key="collect">
                                <List
            className="collect-list"
            loading={loading}
            itemLayout="horizontal"
            loadMore={loadMore}
            dataSource={articleList}
            renderItem={item => (
                <List.Item actions={[<a href={`/details/${item.uniquekey}`} target="_blank">查看</a>]}>
                    <List.Item.Meta
                title={item.uniquekey}
                description={<a href={`/details/${item.uniquekey}`} target="_blank">{item.Title}</a>}
                />
                </List.Item>
            )}
            />
                            </TabPane>
                            <TabPane tab="我的评论列表" key="comment">
                                <List
            className="comments-list"
            loading={loading}
            itemLayout="horizontal"
            loadMore={loadMore}
            dataSource={commentsList}
            renderItem={item => (
                <List.Item actions={[<a href={`/details/${item.uniquekey}`} target="_blank">查看</a>]}>
                                        <List.Item.Meta
                title={`于${item.datetime}评论了文章${item.uniquekey}`}
                description={item.Comments}
                />
                                    </List.Item>
            )}
            />
                            </TabPane>
                            <TabPane tab="头像设置" key="avatar">
                                <CommonAvatar />
                            </TabPane>
                        </Tabs>
                    </Col>
                    <Col span={2}></Col>
                </Row>
                <PCFooter></PCFooter>
            </div>
        );
    }
}
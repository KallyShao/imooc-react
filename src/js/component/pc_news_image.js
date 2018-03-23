/*
* @Author: Administrator
* @Date:   2018-03-23 11:35:42
* @Last Modified by:   Administrator
* @Last Modified time: 2018-03-23 17:31:58
*/
import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

export default class PCNewsImage extends React.Component {
    constructor() {
        super();
        this.state = {
            news: ''
        };
    }
    ;
    componentWillMount() {
        var myFetchOptions = {
            method: 'GET'
        };
        fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=' + this.props.type + '&count=' + this.props.count, myFetchOptions)
            .then(response => response.json())
            .then(json => this.setState({
                news: json
            }));
    }
    ;
    render() {
        //定义样式
        const styleImage = {
            display: 'block',
            width: 'this.props.imageWidth',
            height: '90px'
        };
        const styleH3 = {
            // width: 'this.props.imageWidth',
            width: '110px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
        };
        const {news} = this.state;
        const newsList = news.length
            ?
            news.map((newsItem, index) => (
                <div key={index} className="imageblock">
                    <Link to={`details/${newsItem.uniquekey}`} target="_blank">
                        <div className="custom-image">
                            <img  style={styleImage} src={newsItem.thumbnail_pic_s} alt="" />
                        </div>
                        <div className="custom-card">
                            <h3 style={styleH3}> {newsItem.title} </h3>
                            <p> {newsItem.author_name} </p>
                        </div>
                    </Link>
               </div>
            ))
            :
            '没有加载到任何新闻';

        return (
            <div className="">
                <Card title={this.props.cartTitle} bordered={true} style={{
                width: this.props.width
            }}>
                    {newsList}
                </Card>
            </div>
        );
    }
}
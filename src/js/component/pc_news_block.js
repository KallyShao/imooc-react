/*
* @Author: Administrator
* @Date:   2018-03-23 11:35:01
* @Last Modified by:   Administrator
* @Last Modified time: 2018-03-23 15:49:35
*/
import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

export default class PCNewsBlock extends React.Component {
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
        const {news} = this.state;
        console.log(news.length);
        const newsList = news.length
            ?
            news.map((newsItem, index) => (
                <li key={index}>
	    			<Link to={`details/${newsItem.uniquekey}`} target="_blank">
	    				{newsItem.title}
	    			</Link>
    		</li>
            ))
            :
            '没有加载到任何新闻';

        return (
            <div className="topNewsList">
				<Card>
					<ul>
						{newsList}
					</ul>
				</Card>
			</div>
        );
    }
}
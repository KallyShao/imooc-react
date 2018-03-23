/*
* @Author: Administrator
* @Date:   2018-03-23 11:34:35
* @Last Modified by:   Administrator
* @Last Modified time: 2018-03-23 17:49:19
*/

import React from 'react';
import { Row, Col, Tabs, Carousel } from 'antd';
import PCNewsBlock from './pc_news_block';
import PCNewsImage from './pc_news_image';

const TabPane = Tabs.TabPane;

export default class PCNewsContainer extends React.Component {
    render() {
        const settings = {
            autoplay: true,
            dots: true
        };
        return (
            <div>
				<Row>
					<Col span={2}></Col>
					<Col span={20} className="container">
						<Row>
							<Col span={8} className="left-container">
								<div className="carousel">
									<Carousel {...settings}>
										<div>
											<img src="./src/images/1.jpg" alt=""/>
										</div>
										<div>
											<img src="./src/images/2.jpg" alt=""/>
										</div>
										<div>
											<img src="./src/images/3.jpg" alt=""/>
										</div>
										<div>
											<img src="./src/images/4.jpg" alt=""/>
										</div>
									</Carousel>
								</div>
								<PCNewsImage type="yule" count="6" width="500px" cartTitle="娱乐头条" imageWidth="120px"></PCNewsImage>
							</Col>
							<Col span={8}>
								<Tabs className="tabs_news">
									<TabPane tab="头条" key="1">
										<PCNewsBlock count={22} type="top" width="100%"></PCNewsBlock>
									</TabPane>
									<TabPane tab="国际" key="2">
										<PCNewsBlock count={22} type="guoji" width="100%"></PCNewsBlock>
									</TabPane>
								</Tabs>
							</Col>
							<Col span={8}></Col>
						</Row>
						<div>
							<PCNewsImage type="shehui" count="10" width="100%" cartTitle="社会头条" imageWidth="120px"></PCNewsImage>
							<PCNewsImage type="guonei" count="10" width="100%" cartTitle="国内头条" imageWidth="120px"></PCNewsImage>
						</div>
					</Col>
					<Col span={2}></Col>
				</Row>
			</div>
        );
    }
}
/*
* @Author: Kally Shao
* @Date:   2018-03-16 14:29:27
* @Last Modified by:   Administrator
* @Last Modified time: 2018-03-27 13:53:23
*/

import React from 'react';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import MobileList from './mobile_list';

import { Tabs, Carousel } from 'antd';
const TabPane = Tabs.TabPane;

export default class MobileIndex extends React.Component {
    callback() {}
    ;
    render() {
        const settings = {
            autoplay: true,
            dots: true
        };
        return (
            <div>
              <MobileHeader></MobileHeader>
              <Tabs defaultActiveKey="1" onChange={this.callback.bind(this)}>
                <TabPane tab="头条" key="1">
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
                  <MobileList count={20} type="top"></MobileList>
                </TabPane>
                <TabPane tab="社会" key="2">
                  <MobileList count={20} type="shehui"></MobileList>
                </TabPane>
                <TabPane tab="国内" key="3">
                  <MobileList count={20} type="guonei"></MobileList>
                </TabPane>
                <TabPane tab="国际" key="4">
                  <MobileList count={20} type="guoji"></MobileList>
                </TabPane>
                <TabPane tab="娱乐" key="5">
                  <MobileList count={20} type="yule"></MobileList> 
                </TabPane>
                <TabPane tab="体育" key="6">
                  <MobileList count={20} type="tiyu"></MobileList> 
                </TabPane>
                <TabPane tab="科技" key="7">
                  <MobileList count={20} type="keji"></MobileList> 
                </TabPane>
                <TabPane tab="时尚" key="8">
                  <MobileList count={20} type="shishang"></MobileList> 
                </TabPane>
              </Tabs>
            
              
              <MobileFooter></MobileFooter>
            </div>
        );
    }
    ;
}
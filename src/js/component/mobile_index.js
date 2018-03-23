/*
* @Author: Kally Shao
* @Date:   2018-03-16 14:29:27
* @Last Modified by:   Administrator
* @Last Modified time: 2018-03-23 11:24:02
*/

import React from 'react';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';

import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

export default class MobileIndex extends React.Component {
    callback() {}
    ;
    render() {
        return (
            <div>
          		<MobileHeader></MobileHeader>
          		<Tabs defaultActiveKey="1" onChange={this.callback.bind(this)}>
          			<TabPane tab="头条" key="1">头条内容</TabPane>
          			<TabPane tab="社会" key="2">头条内容</TabPane>
          			<TabPane tab="国内" key="3">头条内容</TabPane>
          			<TabPane tab="国际" key="4">头条内容</TabPane>
          			<TabPane tab="娱乐" key="5">头条内容</TabPane>
          			<TabPane tab="体育" key="6">头条内容</TabPane>
          			<TabPane tab="科技" key="7">头条内容</TabPane>
          			<TabPane tab="时尚" key="8">头条内容</TabPane>
          		</Tabs>
          		<MobileFooter></MobileFooter>
          	</div>
        );
    }
    ;
}
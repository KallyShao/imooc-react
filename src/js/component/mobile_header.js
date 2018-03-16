/*
* @Author: Kally Shao
* @Date:   2018-03-15 16:23:57
* @Last Modified by:   Kally Shao
* @Last Modified time: 2018-03-16 14:48:27
*/

import React from 'react';
import { Row, Col, Menu, Icon } from 'antd';

export default class MobileHeader extends React.Component {
    constructor() {
        super();
        this.state = {
            current: 'top'
        }
    }
    render() {
        return (
            <header id="mobile-header">
      			<img src="./src/images/news_icon.png" alt="logo"/>
      			<span>ReactNews</span>
      		</header>
        );
    }
    ;
}
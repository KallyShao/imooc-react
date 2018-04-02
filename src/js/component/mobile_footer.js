/*
* @Author: Kally Shao
* @Date:   2018-03-16 15:08:26
* @Last Modified by:   Administrator
* @Last Modified time: 2018-04-02 15:10:35
*/
import React from 'react';
import { Row, Col } from 'antd';

export default class MobileFooter extends React.Component {
    render() {
        return (
            <footer>
            <Row>
              <Col span={2}></Col>
              <Col span={20} className="footer">
            © 2016 ReactNews by Kally. All Rights Reserved.
              </Col>
              <Col span={2}></Col>
            </Row>
          </footer>
        );
    }
    ;
}
/*
* @Author: Kally Shao
* @Date:   2018-03-16 15:08:26
* @Last Modified by:   Kally Shao
* @Last Modified time: 2018-03-16 15:09:28
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
						© 2016 ReactNews. All Rights Reserved.
      				</Col>
      				<Col span={2}></Col>
      			</Row>
      		</footer>
        );
    }
    ;
}
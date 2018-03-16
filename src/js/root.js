/*
 * @Author: Administrator
 * @Date:   2018-01-29 21:35:53
 * @Last Modified by:   Kally Shao
<<<<<<< HEAD
 * @Last Modified time: 2018-03-16 14:36:10
=======
 * @Last Modified time: 2018-01-30 22:45:25
>>>>>>> 43ffba18af3ead6b4a85983a094e77f41c199391
 */
import PCIndex from './component/pc_index';
import MobileIndex from './component/mobile_index';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import MediaQuery from 'react-responsive';

export default class Root extends React.Component {
    render() {
        return (
            <div>
				<MediaQuery query='(min-device-width: 1224px'>
	            	<PCIndex></PCIndex>
				</MediaQuery>
				<MediaQuery query='(max-device-width: 1224px'>
	            	<MobileIndex></MobileIndex>
				</MediaQuery>
            </div>
        );
    }
}


ReactDOM.render(<Root />, document.getElementById('mainContainer'));
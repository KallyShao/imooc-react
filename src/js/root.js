/*
 * @Author: Administrator
 * @Date:   2018-01-29 21:35:53
 * @Last Modified by:   Administrator
<<<<<<< HEAD
 * @Last Modified time: 2018-03-23 15:48:40
=======
 * @Last Modified time: 2018-01-30 22:45:25
>>>>>>> 43ffba18af3ead6b4a85983a094e77f41c199391
 */
import PCIndex from './component/pc_index';
import MobileIndex from './component/mobile_index';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import MediaQuery from 'react-responsive';

export default class Root extends React.Component {
    render() {
        return (
            <div>
				<MediaQuery query='(min-device-width: 1224px'>
					<Router>
		            	<PCIndex></PCIndex>
					</Router>
				</MediaQuery>
				<MediaQuery query='(max-device-width: 1224px'>
					<Router>
		            	<MobileIndex></MobileIndex>
					</Router>
				</MediaQuery>
            </div>
        );
    }
}


ReactDOM.render(<Root />, document.getElementById('mainContainer'));
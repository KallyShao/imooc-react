/*
 * @Author: Administrator
 * @Date:   2018-01-29 21:35:53
 * @Last Modified by:   Administrator
<<<<<<< HEAD
 * @Last Modified time: 2018-03-30 14:26:50
=======
 * @Last Modified time: 2018-01-30 22:45:25
>>>>>>> 43ffba18af3ead6b4a85983a094e77f41c199391
 */
import PCIndex from './component/pc_index';
import MobileIndex from './component/mobile_index';
import PCNewsDetail from './component/pc_news_detail';
import MobileNewsDetail from './component/mobile_news_detail';
import PCUserCenter from './component/pc_user_center';
import MobileUserCenter from './component/mobile_user_center';

import Test from './component/test';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import MediaQuery from 'react-responsive';



export default class Root extends React.Component {
    render() {
        return (
            <div>
                <MediaQuery query='(min-device-width: 1224px)'>
                    <BrowserRouter>
                        <Switch>
                            <Route exact path='/' component={PCIndex}></Route>
                            <Route path='/details/:uniquekey' component={PCNewsDetail}></Route>
                            <Route path='/usercenter' component={PCUserCenter}></Route>
                        </Switch>
                    </BrowserRouter>
                </MediaQuery>
                <MediaQuery query='(max-device-width: 1224px)'>
                    <BrowserRouter>
                        <Switch>
                            <Route exact path='/' component={MobileIndex}></Route>
                            <Route path='/details/:uniquekey' component={MobileNewsDetail}></Route>
                            <Route path='/usercenter' component={MobileUserCenter}></Route>
                        </Switch>
                    </BrowserRouter>
                </MediaQuery>
        { /*
                <Test likeText="up" unLikeText="down"></Test>
        */ }


            </div>
        );
    }
}


ReactDOM.render(<Root />, document.getElementById('mainContainer'));
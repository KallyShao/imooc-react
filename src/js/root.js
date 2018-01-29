/*
 * @Author: Administrator
 * @Date:   2018-01-29 21:35:53
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-01-29 22:13:14
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Index from './index.js';
import List from './component/list.js';
import {
    Router,
    Route,
    hashHistory
} from 'react-router';

export default class Root extends React.Component() {
    render() {
        return (
            <Router history='hashHistory'>
                <Route component={Index} path='/'></Route>
                <Route component={List} path='list'></Route>
            </Router>
        );
    }
}


ReactDOM.render(<Root />, document.getElementById('test'));
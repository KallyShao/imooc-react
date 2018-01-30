/*
 * @Author: Administrator
 * @Date:   2018-01-29 21:35:53
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-01-30 22:45:25
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {
    Router,
    Route,
    hashHistory
} from 'react-router';


export default class Root extends React.Component {
    render() {
        return (
            <div>Init</div>
        );
    }
}


ReactDOM.render(<Root />, document.getElementById('mainContainer'));
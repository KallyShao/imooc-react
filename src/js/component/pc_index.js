/*
* @Author: Administrator
* @Date:   2018-03-15 16:37:08
* @Last Modified by:   Kally Shao
* @Last Modified time: 2018-03-16 15:06:31
*/

import React from 'react';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';

export default class PCIndex extends React.Component {
    render() {
        return (
            <div>
          		<PCHeader></PCHeader>
          		<PCFooter></PCFooter>
          	</div>
        );
    }
    ;
}
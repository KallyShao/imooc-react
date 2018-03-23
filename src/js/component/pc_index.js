/*
* @Author: Administrator
* @Date:   2018-03-15 16:37:08
* @Last Modified by:   Administrator
* @Last Modified time: 2018-03-23 11:51:02
*/

import React from 'react';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
import PCNewsContainer from './pc_news_container';

export default class PCIndex extends React.Component {
    render() {
        return (
            <div>
          		<PCHeader></PCHeader>
          		<PCNewsContainer></PCNewsContainer>
          		<PCFooter></PCFooter>
          	</div>
        );
    }
    ;
}
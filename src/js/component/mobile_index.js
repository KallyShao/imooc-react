/*
* @Author: Kally Shao
* @Date:   2018-03-16 14:29:27
* @Last Modified by:   Kally Shao
* @Last Modified time: 2018-03-16 15:10:05
*/

import React from 'react';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';

export default class MobileIndex extends React.Component {
    render() {
        return (
            <div>
          		<MobileHeader></MobileHeader>
          		<MobileFooter></MobileFooter>
          	</div>
        );
    }
    ;
}
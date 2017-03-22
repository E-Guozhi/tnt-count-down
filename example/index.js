/*
* @Author: wj77998
* @Date:   2017-03-02 19:09:56
* @Email:  wj77998@qq.com
* @Last Modified by:   wj77998
* @Last Modified time: 2017-03-02 19:37:27
*/
     
import React from 'react'

import { render } from 'react-dom';

import CountDown from '../src/index'

import "../assets/index.less"
var go=function () {
	location.href="https://www.baidu.com";
}
render(
<div>
<CountDown 
	endTime={"2018/3/22 16:30:00"}
	showNum={4}
	onComplete={go}
/>
</div>
, document.getElementById('app'));

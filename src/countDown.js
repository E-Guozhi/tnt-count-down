/**
 * Created by KE on 2017/3/16.
 */
 import React,{ PropTypes } from "react"
 import classNames from 'classnames'
 const CountDown=React.createClass({
 	propTypes:{

 	},
 	render(){
 		var year=this.props.year;
 		var time=125;
 		var ctime=setInterval(()=>{time--},1000)
 		return(
 			<div>
 			<p className="title">倒计时</p>
 			<div className="countdown">
 			<p>距离本场<span className="cd-state">开始</span>还有
 			<span className="cd-time">0</span><span className="cd-time">2</span>年
 			<span className="cd-time">0</span><span className="cd-time">2</span>月
 			<span className="cd-time">0</span><span className="cd-time">2</span>日
 			<span className="cd-time">0</span><span className="cd-time">2</span>时
 			<span className="cd-time">1</span><span className="cd-time">5</span>分
 			<span className="cd-time">1</span><span className="cd-time">2</span>秒 限时限量疯抢</p>
 			<p style={{fontSize:14},{backgroundColor:""}}>{ctime}</p>
 			</div>
 			</div>
 			);
 		}
 	})
 	export default CountDown;
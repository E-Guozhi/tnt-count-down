/**
 * Created by KE on 2017/3/16.
 */
 import React from "react"
 import classNames from 'classnames'
 const CountDown=React.createClass({
 	render(){
 		var year={this.props.year}
 		return(
 			<div>
 			<p className="title">倒计时</p>
 			<div>{year}年</div>
 			</div>
 			);
 	}
 })
 export default CountDown;
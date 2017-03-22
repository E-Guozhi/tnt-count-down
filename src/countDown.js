/**
 * Created by KE on 2017/3/16.
 */
 import React,{ PropTypes } from "react"
 import classNames from 'classnames'
 export default class CountDown extends React.Component{
 	static propTypes={
 		endTime: React.PropTypes.string, 
 		onComplete:React.PropTypes.func,
        showNum:React.PropTypes.number //日时分秒显示几项
    };
    static defaultProps={
    	endTime:"2018/01/01 00:00:00",
        showNum:4
    };
    constructor(props){
    	super(props);
    	this.state = {
    		cArr:[]
    	};
    	this.calTime=this.calTime.bind(this);
    }
    calTime(){
    	this.interval=setInterval(()=>{
    		var now=new Date();
    		var endTime=new Date(this.props.endTime);
    		var diffTime=Math.round((endTime.getTime()-now.getTime())/1000);
    		if(diffTime<=0){
    			this.props.onComplete && this.props.onComplete();
    			clearInterval(this.interval);	
    		}else{
    			var year=endTime.getFullYear()-now.getFullYear();
    			var month=endTime.getMonth()-now.getMonth();
    			if(month<0){month+=12;year--}
    			var date=Math.floor(diffTime/(60*60*24));
    			var hour=Math.floor((diffTime-date*60*60*24)/(60*60));
    			var minute=Math.floor((diffTime-date*60*60*24-hour*60*60)/60);
    			var second=(diffTime-date*60*60*24-hour*60*60-minute*60);
    			if(date>30){
    				date=date-Math.floor(date/30)*30;
    			}
    			var cArr=[{num:year,unit:"年"},{num:month,unit:"月"},{num:date,unit:"日"},{num:hour,unit:"时"},{num:minute,unit:"分"},{num:second,unit:"秒"}];
    			cArr.forEach(function(v,i){
    				if(v.num<0){
    					v.num=0
    				}
    				if(v.num.toString().length<2){
    					v.num="0"+v.num;
    				}
    			})
    			cArr=cArr.slice(cArr.length-this.props.showNum);
    			this.setState({cArr:cArr});
    		}
    	},1000)
    }
    componentDidMount(){
    	this.calTime();
    }
    render(){
    	var _self=this;
    	var _html=[];
    	for(var i=0;i<_self.state.cArr.length;i++){
    		_html.push(
    			React.DOM.span({className:"cd-time",key:i},_self.state.cArr[i].num+_self.state.cArr[i].unit)
    			)
    	}
    	return(
    		<div>
    		<p className="title">倒计时</p>
    		<div className="countdown">{_html}</div>
    		</div>);
    	}

    }


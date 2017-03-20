/*
 * @Author: wj77998
 * @Date:   2017-03-01 15:26:44
 * @Email:  wj77998@qq.com
 * @Last Modified by:   wj77998
 * @Last Modified time: 2017-03-02 19:38:06
 */


import React, { PropTypes } from 'react'
import classNames from 'classnames'
import TntScore from 'tnt-score'
import "tnt-score/assets/index.css"

const Test = React.createClass({
    getInitialState() {
        let value = this.props.value || 0;
        let hoverValue = 0;
        return {
            value,
            hoverValue
        };
    },
    onChange(val){
      let value = val;
      this.setState({
        value,
      })
    },
    onHoverChange(val){
      let hoverValue = val;
      this.setState({
        hoverValue,
      })
    },
    render() {
        const { value , hoverValue } = this.state;
        const { onChange , onHoverChange } = this;
        return ( 
          <div>
            <p
              className="test"
            >这是一个评分组件demo：</p>

            <TntScore
              defaultValue={ value }
              style={{ fontSize: 16,margin:10 }}
              allowHalf
              onChange={onChange}
              onHoverChange={onHoverChange}
            />

            <span 
              className="result"
            >
              { value } / { hoverValue || 0 }
            </span>

          </div>
        );
    }
});


export default Test;

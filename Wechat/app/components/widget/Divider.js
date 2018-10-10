import React, { Component } from 'react'
import { View } from 'react-native'
/**
 * 分割线
 *  @param {*} orientation 分隔线方向
 *  @param {*} color 分隔线颜色
 *  @param {*} size 分割线宽度
 */
class Divider extends Component {
  static defaultProps = {
    orientation: 'horizontal',
    color: 'transparent',
    size: 1
  }

  render() {
    let dividerStyle = {}
    if (this.props.orientation == 'horizontal') {
      dividerStyle = {
        // flex: 1,
        height: this.props.size,
        backgroundColor: this.props.color
      }
    } else if (this.props.orientation == 'vertical') {
      dividerStyle = {
        // flex: 1,
        width: this.props.size,
        backgroundColor: this.props.color
      }
    }
    return <View style={dividerStyle} />
  }
}

export default Divider

import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  DeviceEventEmitter,
  Dimensions,
  TouchableHighlight
} from 'react-native'
import { connect } from 'react-redux'

import { Icon } from 'react-native-elements'
import * as Animatable from 'react-native-animatable'

import { WingBlank, WhiteSpace } from 'antd-mobile-rn'
import _ from 'lodash'

const { height, width } = Dimensions.get('window')

const picWidth = (width - 80) / 3
import { createAction, NavigationActions, Storage } from '../../../utils'

import Divider from '../../../components/widget/Divider'

const images = [
  'https://avatars1.githubusercontent.com/u/10321883?s=88&v=4',
  'https://avatars1.githubusercontent.com/u/10321883?s=88&v=4',
  'https://avatars1.githubusercontent.com/u/10321883?s=88&v=4',
  'https://avatars1.githubusercontent.com/u/10321883?s=88&v=4',
  'https://avatars1.githubusercontent.com/u/10321883?s=88&v=4',
  'https://avatars1.githubusercontent.com/u/10321883?s=88&v=4',
  'https://avatars1.githubusercontent.com/u/10321883?s=88&v=4'
]

@connect(({ commentWidget }) => ({
  ...commentWidget
}))
export default class CommentWidget extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isShowingPanel: false
    }
  }
  componentDidMount() {
    DeviceEventEmitter.addListener('hideWidget', () => {
      if (this.state.isShowingPanel) {
        this.setState({ isShowingPanel: false })
      }
    })
  }

  render() {
    const { props } = this

    return (
      <View {...props} style={{}}>
        <View style={styles.containerStyle}>
          {this.state.isShowingPanel && (
            <WingBlank size="sm">
              <Animatable.View
                animation="slideInRight"
                duration={200}
                style={{
                  borderRadius: 4,
                  overflow: 'hidden',
                  flexDirection: 'row',
                  shadowOffset: {
                    width: 2,
                    height: 2
                  }
                }}
              >
                <TouchableHighlight onPress={() => {}}>
                  <View style={styles.childContainerStyle}>
                    {/* 赞 */}

                    <Text style={styles.textStyle}>赞</Text>
                  </View>
                </TouchableHighlight>

                <Divider color="#3e4347" orientation="vertical" />
                <TouchableHighlight onPress={() => {}}>
                  <View style={styles.childContainerStyle}>
                    {/* 评论 */}

                    <Text style={styles.textStyle}>评论</Text>
                  </View>
                </TouchableHighlight>
              </Animatable.View>
            </WingBlank>
          )}
          <View
            style={{
              overflow: 'hidden',
              backgroundColor: 'white',
              height: '100%',
              justifyContent: 'center'
            }}
          >
            <Icon
              name="message-reply-text"
              type="material-community"
              color="#97aacf"
              onPress={() => {
                DeviceEventEmitter.emit('hideWidget')

                this.setState({
                  isShowingPanel: !this.state.isShowingPanel
                })
              }}
            />
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    height: 40,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',

    overflow: 'hidden'
  },
  childContainerStyle: {
    width: 90,
    height: 40,
    backgroundColor: '#4b5154',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    color: 'white'
  }
})

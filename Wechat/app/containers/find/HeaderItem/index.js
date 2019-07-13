import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  DeviceEventEmitter,
  Dimensions,
  TouchableHighlight,
  ImageBackground
} from 'react-native'
import { connect } from 'react-redux'

import { Icon } from 'react-native-elements'

import { WingBlank, WhiteSpace } from 'antd-mobile-rn'
import _ from 'lodash'

const { height, width } = Dimensions.get('window')

import { createAction, NavigationActions, Storage } from '../../../utils'

export default class HeaderItem extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isShowingPanel: false
    }
  }
  componentDidMount() {}

  render() {
    const { props } = this
    const { userInfo } = props
    debugger
    return (
      <View style={styles.containerStyle}>
        <ImageBackground
          style={styles.backgroundImageStyle}
          source={{
            uri: userInfo['profile-image']
          }}
        >
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            {/* <Image
              source={require('../../../../images/application/test/img_history_glod.png')}
            />
            <Text style={{ color: 'white', marginTop: 10 }}>
              {this._maxScore()}分
            </Text> */}
          </View>
        </ImageBackground>

        <View style={styles.userInfoStyle}>
          {/* 用户信息展示位置 */}

          <Text style={styles.nikenameStyle}>{userInfo['nick']}</Text>
          <WingBlank>
            <View
              style={{
                padding: 1,
                borderColor: 'gray',
                borderWidth: 0.5,
                backgroundColor: 'white'
              }}
            >
              <Image
                style={styles.avatarImageStyle}
                source={{
                  uri: userInfo['avatar']
                }}
              />
            </View>
          </WingBlank>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    paddingBottom: 40,
    backgroundColor: 'white'
  },
  backgroundImageStyle: {
    height: 300,
    backgroundColor: 'gray',
    width: '100%'
  },
  userInfoStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 8,
    bottom: 20
  },
  avatarImageStyle: {
    backgroundColor: 'gray',

    width: 70,
    height: 70
  },
  nikenameStyle: {
    color: 'white',
    fontWeight: 'bold'
  }
})

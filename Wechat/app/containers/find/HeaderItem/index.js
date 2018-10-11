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

@connect(({ commentWidget }) => ({
  ...commentWidget
}))
export default class HeaderItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isShowingPanel: false
    }
  }
  componentDidMount() {}

  render() {
    const { props } = this

    return (
      <View style={styles.containerStyle}>
        <ImageBackground
          style={styles.backgroundImageStyle}
          source={{
            uri:
              'https://wx2.sinaimg.cn/mw690/bfc243a3gy1fw4d49qc1oj20hs0e8dm9.jpg'
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

          <Text style={styles.nikenameStyle}>名字</Text>
          <WingBlank>
            <View
              style={{
                padding: 1,
                borderColor: 'gray',
                borderWidth: 0.5
              }}
            >
              <Image
                style={styles.avatarImageStyle}
                source={{
                  uri:
                    'https://wx2.sinaimg.cn/mw690/bfc243a3gy1fw4d49qc1oj20hs0e8dm9.jpg'
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
    width: 70,
    height: 70
  },
  nikenameStyle: {
    color: 'white',
    fontWeight: 'bold'
  }
})

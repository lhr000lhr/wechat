import React, { Component } from 'react'
import {
  StatusBar,
  StyleSheet,
  View,
  Platform,
  Animated,
  Text,
  SafeAreaView
} from 'react-native'
import DeviceInfo from 'react-native-device-info'
import NavigationItem from './widget/NavigationItem'
import { NavigationActions, createAction } from '../utils'

const AnimatedSafeAreaView = Animated.createAnimatedComponent(SafeAreaView)

const MyStatusBar = ({ backgroundColor, topBarOpacity, ...props }) => {
  return (
    <View style={styles.headerStyle}>
      <AnimatedSafeAreaView
        style={[
          styles.headerStyle,
          { backgroundColor: backgroundColor, opacity: topBarOpacity }
        ]}
      >
        <View style={styles.titleBar} />
      </AnimatedSafeAreaView>
      <SafeAreaView
        style={[styles.headerStyle, { backgroundColor: 'transparent' }]}
      >
        <View>
          {/* 标题栏 */}

          <View style={styles.titleBar}>
            <Text
              style={styles.navButtonStyle}
              onPress={() => {
                props.dispatch(NavigationActions.back())
              }}
            >
              返回
            </Text>

            <Text style={styles.titleText}>朋友圈</Text>

            <Text style={styles.navButtonStyle}>拍照</Text>
          </View>
          {/* 用户信息栏 */}
        </View>
      </SafeAreaView>
    </View>
  )
}

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56

const styles = StyleSheet.create({
  statusBar: {
    height: APPBAR_HEIGHT,
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: 99
  },
  headerStyle: {
    position: 'absolute',
    zIndex: 999,
    width: '100%'
  },
  titleBar: {
    height: 40,
    justifyContent: 'space-between',
    flexDirection: 'row',

    ...Platform.select({
      ios: {
        alignItems: 'center'
      },
      android: {
        marginTop: DeviceInfo.getSystemVersion() >= '5.0.0' ? 25 : 5
      }
    })
  },
  titleText: {
    color: 'white',
    ...Platform.select({
      ios: {
        fontSize: 17,
        fontWeight: '700'
      },
      android: {
        fontSize: 20,
        marginHorizontal: 16,
        fontWeight: '500'
      }
    })
  },
  navButtonStyle: {
    fontSize: 16,
    color: 'white',
    margin: 8
  }
})

export default MyStatusBar

import React, { Component } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { connect } from 'react-redux'

@connect()
class SettingScreen extends Component {
  static navigationOptions = {
    title: '设置',
    tabBarLabel: '设置',
  }
  render() {
    return <View style={styles.container}>设置</View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default SettingScreen

import React, { Component } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { connect } from 'react-redux'

@connect()
class UserInformationizeScreen extends Component {
  static navigationOptions = {
    title: '我的信息',
    tabBarLabel: '我的信息',
  }
  render() {
    return <View style={styles.container} />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default UserInformationizeScreen

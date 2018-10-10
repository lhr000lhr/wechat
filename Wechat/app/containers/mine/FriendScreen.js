import React, { Component } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { connect } from 'react-redux'

@connect()
class FriendScreen extends Component {
  static navigationOptions = {
    title: '我的好友',
    tabBarLabel: '我的好友',
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

export default FriendScreen

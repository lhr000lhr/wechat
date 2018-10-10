import React, { Component } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { connect } from 'react-redux'

@connect()
class CollectScreen extends Component {
  static navigationOptions = {
    title: '收藏',
    tabBarLabel: '收藏',
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

export default CollectScreen

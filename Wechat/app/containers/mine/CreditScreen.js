import React, { Component } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { connect } from 'react-redux'

@connect()
class CreditScreen extends Component {
  static navigationOptions = {
    title: '我的积分',
    tabBarLabel: '我的积分',
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

export default CreditScreen

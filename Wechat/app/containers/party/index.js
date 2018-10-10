import React, { Component } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { connect } from 'react-redux'

@connect()
class Party extends Component {
  static navigationOptions = {
    title: '微信',
    tabBarLabel: '微信',
    tabBarIcon: ({ focused, tintColor }) => (
      <Image
        style={{ tintColor: focused ? 'black' : tintColor }}
        source={require('../../images/tab/icon_tab_party_unselect.png')}
      />
    ),
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
  icon: {
    width: 32,
    height: 32,
  },
})

export default Party

import React, { Component } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { connect } from 'react-redux'

@connect()
class Application extends Component {
  static navigationOptions = {
    title: '应用',
    tabBarLabel: '应用',
    tabBarIcon: ({ focused, tintColor }) => (
      <Image
        style={{ tintColor: focused ? '#D0001C' : tintColor }}
        source={require('../../images/tab/icon_tab_application_unselect.png')}
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

export default Application

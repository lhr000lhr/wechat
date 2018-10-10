import React, { Component } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { connect } from 'react-redux'

import { List, Grid } from 'antd-mobile-rn'
const Item = List.Item

@connect()
class Find extends Component {
  static navigationOptions = {
    title: '发现',
    tabBarLabel: '发现',
    tabBarIcon: ({ focused, tintColor }) => (
      <Image
        style={{ tintColor: focused ? '#38649F' : tintColor }}
        source={require('../../images/tab/icon_tab_find_unselect.png')}
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

export default Find

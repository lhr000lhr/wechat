import React, { Component } from 'react'
import { StyleSheet, View, Image, ScrollView } from 'react-native'
import { connect } from 'react-redux'

import { List, Grid } from 'antd-mobile-rn'

import { NavigationActions, createAction } from '../../utils'

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
    )
  }
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <List>
          <Item
            thumb={
              <Image
                source={require('../../images/mine/mine_about.png')}
                style={{ marginRight: 13, width: 15, height: 15 }}
              />
            }
            arrow="horizontal"
            onClick={() => {
              this.props.dispatch(
                NavigationActions.navigate({
                  routeName: 'MomentScreen',
                  params: {}
                })
              )
            }}
          >
            朋友圈
          </Item>
        </List>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  icon: {
    width: 32,
    height: 32
  }
})

export default Find

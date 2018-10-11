import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  FlatList,
  RefreshControl,
  DeviceEventEmitter
} from 'react-native'
import { connect } from 'react-redux'

import MomentItem from './MomentItem'

@connect(({ moment }) => ({ ...moment }))
class MomentScreen extends Component {
  static navigationOptions = {
    title: '朋友圈'
  }

  componentDidMount() {
    let { itemData } = this.props.navigation.state.params
    this.props.dispatch({
      type: 'moment/allMoment'
    })
  }

  render() {
    const { data } = this.props
    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          contentContainerStyle={styles.liststyle}
          onScroll={() => {
            // this.props.dispatch({
            //   type: 'commentWidget/hide'
            // })

            DeviceEventEmitter.emit('hideWidget')
          }}
          refreshControl={
            <RefreshControl
              refreshing={this.props.refreshing}
              onRefresh={this._requestData}
            />
          }
          renderItem={({ item, index }) => <MomentItem key={index} {...item} />}
        />
      </View>
    )
  }

  _requestData = () => {
    const { item } = this.props.navigation.state.params
    this.props.dispatch({
      type: 'moment/allMoment'
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  liststyle: {},
  iconStyle: {}
})

export default MomentScreen

import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  FlatList,
  RefreshControl,
  DeviceEventEmitter,
  ActivityIndicator,
  Text,
  ScrollView
} from 'react-native'
import { connect } from 'react-redux'

import HeaderItem from './HeaderItem'
import MomentItem from './MomentItem'

import RefreshState from '../../components/widget/RefreshState'

@connect(({ moment }) => ({ ...moment }))
class MomentScreen extends Component {
  static navigationOptions = {
    header: null
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
            DeviceEventEmitter.emit('hideWidget')
          }}
          onEndReachedThreshold={0.2}
          onEndReached={this._onFooterRefresh}
          ListFooterComponent={this.renderFooter}
          refreshControl={
            <RefreshControl
              refreshing={this.props.refreshing}
              onRefresh={this._requestData}
            />
          }
          renderItem={({ item, index }) => <MomentItem key={index} {...item} />}
          ListHeaderComponent={() => {
            return <HeaderItem />
          }}
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

  /**
   * 加载更多
   */
  _onFooterRefresh = () => {
    if (this.props.loading == RefreshState.Idle) {
      this.props.dispatch({
        type: 'moment/loadMore'
      })
    }
  }

  renderFooter = () => {
    const { loading, refreshing } = this.props
    // debugger
    if (loading === RefreshState.Refreshing) {
      return (
        <ActivityIndicator
          animating
          size="small"
          style={{
            padding: 10
          }}
        />
      )
    } else if (loading === RefreshState.Idle) {
      return (
        <Text
          style={{
            padding: 10,
            textAlign: 'center'
          }}
        >
          {!refreshing ? '' : ''}
        </Text>
      )
    } else if (loading == RefreshState.NoMoreData) {
      return (
        <Text
          style={{
            padding: 10,
            textAlign: 'center'
          }}
        >
          {this.props.data && this.props.data.length > 5 && '没有更多数据'}
        </Text>
      )
    }

    return null
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

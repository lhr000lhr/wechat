import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  FlatList,
  RefreshControl,
  DeviceEventEmitter,
  ActivityIndicator,
  Text,
  SafeAreaView,
  Platform,
  Animated
} from 'react-native'
import { connect } from 'react-redux'

import HeaderItem from './HeaderItem'
import MomentItem from './MomentItem'

import RefreshState from '../../components/widget/RefreshState'
import MyNavBar from '../../components/MyNavBar'

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList)

@connect(({ app, moment }) => ({ app, ...moment }))
class MomentScreen extends Component {
  static navigationOptions = {
    header: null
  }
  constructor(props) {
    super(props)
    this.state = {
      scrollY: new Animated.Value(0)
    }
  }

  componentDidMount() {
    let { itemData } = this.props.navigation.state.params
    this.props.dispatch({
      type: 'moment/allMoment'
    })
  }

  render() {
    const { feedList } = this.props

    // const topBarOpacity = this.state.scrollY / 3     0.0

    const topBarOpacity = this.state.scrollY.interpolate({
      inputRange: [0, 80, 160],
      outputRange: [0, 0.5, 1],
      extrapolate: 'clamp'
    })
    return (
      <View style={styles.container}>
        <MyNavBar
          {...this.props}
          backgroundColor="#38649F"
          topBarOpacity={topBarOpacity}
        />
        <AnimatedFlatList
          data={feedList}
          ref={flatList => {
            _flatList = flatList
          }}
          contentContainerStyle={styles.liststyle}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
            { useNativeDriver: true }
          )}
          onScrollBeginDrag={event => {
            DeviceEventEmitter.emit('hideWidget')
          }}
          onEndReachedThreshold={0.4}
          onEndReached={this._onFooterRefresh}
          ListFooterComponent={this.renderFooter}
          refreshControl={
            <RefreshControl
              refreshing={this.props.refreshing}
              onRefresh={this._requestData}
            />
          }
          renderItem={({ item, index }) => <MomentItem key={index} {...item} />}
          ListHeaderComponent={<HeaderItem {...this.props.app} />}
          keyExtractor={(item, i) => `${i}`}
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
    flex: 1,
    backgroundColor: 'white'
  },

  liststyle: {
    backgroundColor: 'white'
  },
  iconStyle: {}
})

export default MomentScreen

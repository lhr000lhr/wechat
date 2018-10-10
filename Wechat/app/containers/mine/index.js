import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Image,
  StatusBar,
  Platform,
  Text,
  ScrollView,
  ImageBackground,
} from 'react-native'
import { connect } from 'react-redux'
import DeviceInfo from 'react-native-device-info'
// import Grade from '../../components/mine/Grade'
import { SafeAreaView } from 'react-navigation'
import CarouselIcon from '../../components/mine/CarouselIcon'
import { NavigationActions } from '../../utils'

@connect()
class Mine extends Component {
  static navigationOptions = {
    header: null,
    title: '我',
    tabBarLabel: '我',
    tabBarIcon: ({ focused, tintColor }) => (
      <Image
        style={{ tintColor: focused ? '#38649F' : tintColor }}
        source={require('../../images/tab/icon_tab_mine_unselect.png')}
      />
    ),
  }

  gotoNextScreen = screenText => {
    this.props.dispatch(NavigationActions.navigate({ routeName: screenText }))
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <ImageBackground
            style={styles.topBackground}
            source={require('../../images/mine/mine_background.png')}
          >
            <SafeAreaView>
              <View>
                {/* 标题栏 */}
                <View style={styles.titleBar}>
                  <Text style={styles.titleText}>我</Text>
                </View>
                {/* 用户信息栏 */}
                <View style={styles.userInfoParent}>
                  <View style={styles.userInfoLeft}>
                    <Image
                      style={styles.headerIcon}
                      source={{
                        uri:
                          'http://i.shangc.net/2017/0105/20170105114938828.jpg',
                      }}
                    />
                    <View style={styles.userInfo}>
                      <Text style={{ color: 'white' }}>韩小夫（组织委员）</Text>
                      {/* <Grade text="Lv.50" /> */}
                    </View>
                  </View>
                  <View style={styles.userInfoRight}>
                    <Image
                      style={{ width: 17, height: 17 }}
                      source={require('../../images/mine/mine_icon_integral.png')}
                    />
                    <Text
                      style={{ color: 'white', fontSize: 17, marginLeft: 8 }}
                    >
                      28
                    </Text>
                  </View>
                </View>
              </View>
            </SafeAreaView>
          </ImageBackground>
        </View>
        <ScrollView
          automaticallyAdjustContentInsets={false}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.tabParent}>
            {/* <Grid
              data={data}
              isCarousel
              columnNum={3}
              onClick={dataItem => this.gotoNextScreen(dataItem.screen)}
              hasLine={false}
              renderItem={dataItem => <CarouselIcon dataItem={dataItem} />}
            /> */}
          </View>
          <View style={styles.itemParent}>
            {/* <Item
              thumb={
                <Image
                  source={require('../../images/mine/mine_friend.png')}
                  style={{ marginRight: 13, width: 15, height: 15 }}
                />
              }
              arrow="horizontal"
              onClick={() => {
                this.gotoNextScreen('FriendScreen')
              }}
            >
              我的好友
            </Item>
            <Item
              thumb={
                <Image
                  source={require('../../images/mine/mine_scan.png')}
                  style={{ marginRight: 13, width: 15, height: 15 }}
                />
              }
              arrow="horizontal"
            >
              扫一扫
            </Item>
            <Item
              thumb={
                <Image
                  source={require('../../images/mine/mine_integral.png')}
                  style={{ marginRight: 13, width: 15, height: 15 }}
                />
              }
              arrow="horizontal"
              onClick={() => {
                this.gotoNextScreen('CreditScreen')
              }}
            >
              我的积分
            </Item>
            <Item
              thumb={
                <Image
                  source={require('../../images/mine/mine_collect.png')}
                  style={{ marginRight: 13, width: 15, height: 15 }}
                />
              }
              arrow="horizontal"
              onClick={() => {
                this.gotoNextScreen('CollectScreen')
              }}
            >
              收藏夹
            </Item>
            <Item
              thumb={
                <Image
                  source={require('../../images/mine/mine_setting.png')}
                  style={{ marginRight: 13, width: 15, height: 15 }}
                />
              }
              arrow="horizontal"
              onClick={() => {
                this.gotoNextScreen('SettingScreen')
              }}
            >
              设置
            </Item>
            <Item
              thumb={
                <Image
                  source={require('../../images/mine/mine_about.png')}
                  style={{ marginRight: 13, width: 15, height: 15 }}
                />
              }
              arrow="horizontal"
              onClick={() => {
                this.gotoNextScreen('AboutScreen')
              }}
            >
              关于
            </Item> */}
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    width: 32,
    height: 32,
  },
  titleBar: {
    height: 40,
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        alignItems: 'center',
      },
      android: {
        // alignItems: 'center'
        marginTop: DeviceInfo.getSystemVersion() >= '5.0.0' ? 25 : 5,
      },
    }),
  },
  titleText: {
    color: 'white',
    ...Platform.select({
      ios: {
        fontSize: 17,
        fontWeight: '700',
      },
      android: {
        fontSize: 20,
        marginHorizontal: 16,
        fontWeight: '500',
      },
    }),
  },
  topBackground: {
    width: '100%',
    // height: 160
  },
  tabParent: {
    // height: 100,
    backgroundColor: 'white',
    marginTop: 10,
  },
  userInfoParent: {
    width: '100%',
    height: 85,
    alignItems: 'center',
    paddingLeft: 11,
    paddingRight: 11,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userInfoLeft: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  userInfoRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userInfo: {
    marginLeft: 20,
    justifyContent: 'space-between',
    height: 60,
  },
  headerIcon: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'white',
  },
  itemParent: {
    marginTop: 10,
  },
  logout: {},
})

export default Mine

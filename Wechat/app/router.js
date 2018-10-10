import React, { PureComponent } from 'react'
import {
  BackHandler,
  Animated,
  Easing,
  StatusBar,
  AppState,
  Platform,
  Linking,
  DeviceEventEmitter,
  AsyncStorage
} from 'react-native'
import {
  StackNavigator,
  TabNavigator,
  TabBarBottom,
  addNavigationHelpers,
  NavigationActions
} from 'react-navigation'
import {
  initializeListeners,
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware
} from 'react-navigation-redux-helpers'
import { connect } from 'react-redux'
import DeviceInfo from 'react-native-device-info'
import codePush from 'react-native-code-push'
import SplashScreen from 'react-native-splash-screen'

import Loading from './containers/Loading'
import Login from './containers/Login'
import Home from './containers/Home'
import Account from './containers/Account'
import Detail from './containers/Detail'

import Party from './containers/party'
import Application from './containers/application'
import Find from './containers/find'
import Mine from './containers/mine'

import AboutScreen from './containers/mine/AboutScreen'
import CollectScreen from './containers/mine/CollectScreen'
import CreditScreen from './containers/mine/CreditScreen'
import FriendScreen from './containers/mine/FriendScreen'
import SettingScreen from './containers/mine/SettingScreen'
import UserInformationizeScreen from './containers/mine/UserInformationizeScreen'

import MomentScreen from './containers/find/MomentScreen'

//状态栏颜色导航栏样式
StatusBar.setBarStyle('light-content')
StatusBar.setHidden(false)
StatusBar.setTranslucent(true)
Platform.OS == 'android' && StatusBar.setBackgroundColor('rgba(0, 0, 0, 0.20)')
//我的界面以及子界面
const MineNavigator = {
  AboutScreen: { screen: AboutScreen },
  CollectScreen: { screen: CollectScreen },
  CreditScreen: { screen: CreditScreen },
  FriendScreen: { screen: FriendScreen },
  SettingScreen: { screen: SettingScreen },
  UserInformationizeScreen: { screen: UserInformationizeScreen }
}

const FindNavigator = {
  MomentScreen: { screen: MomentScreen }
}

const HomeNavigator = TabNavigator(
  {
    Party: { screen: Party },
    Application: { screen: Application },
    Find: { screen: Find },
    Mine: { screen: Mine }
  },
  {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
    lazyLoad: false,
    tabBarOptions: {
      activeTintColor: '#38649F',
      inactiveTintColor: '#C7C5CD'
    }
  }
)

const MainNavigator = StackNavigator(
  {
    HomeNavigator: { screen: HomeNavigator },
    ...MineNavigator,

    ...FindNavigator
  },
  {
    navigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#38649F',
        ...Platform.select({
          android: {
            paddingTop:
              DeviceInfo.getSystemVersion() >= '5.0.0'
                ? StatusBar.currentHeight
                : 0,
            height:
              DeviceInfo.getSystemVersion() >= '5.0.0'
                ? 56 + StatusBar.currentHeight
                : 56
          }
        })
        //   height: 60 + StatusBar.currentHeight,
      },
      headerTruncatedBackTitle: '返回',
      headerPressColorAndroid: 'rgba(0,0,0,0.2)'
    },
    // headerMode: 'float'
    headerMode: Platform.OS === 'ios' ? 'screen' : 'float'
  }
)

const AppNavigator = StackNavigator(
  {
    Main: { screen: MainNavigator },
    Login: { screen: Login }
  },
  {
    headerMode: 'none',
    mode: 'modal',
    navigationOptions: {
      gesturesEnabled: false
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps
        const { index } = scene

        const height = layout.initHeight
        const translateY = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0]
        })

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1]
        })

        return { opacity, transform: [{ translateY }] }
      }
    })
  }
)

function getCurrentScreen(navigationState) {
  if (!navigationState) {
    return null
  }
  const route = navigationState.routes[navigationState.index]
  if (route.routes) {
    return getCurrentScreen(route)
  }
  return route.routeName
}

export const routerMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.router
)
const addListener = createReduxBoundAddListener('root')

@connect(({ app, router }) => ({ app, router }))
class Router extends PureComponent {
  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.backHandle)
  }

  componentDidMount() {
    initializeListeners('root', this.props.router)
    //隐藏引导页
    this.timer = setTimeout(() => {
      SplashScreen.hide()
    }, 500)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.backHandle)
  }
  codePushStatusDidChange(status) {
    // alert(111)
    switch (status) {
      case codePush.SyncStatus.DOWNLOADING_PACKAGE:
        // Show "downloading" modal
        Toast.show('正在下载更新...')

        break
      case codePush.SyncStatus.INSTALLING_UPDATE:
        // Hide "downloading" modal
        Toast.show('正在升级...')

        break
      case codePush.SyncStatus.UPDATE_INSTALLED:
        Toast.show('更新成功')

        break
    }
  }
  backHandle = () => {
    const currentScreen = getCurrentScreen(this.props.router)
    if (currentScreen === 'Login') {
      return true
    }
    if (currentScreen !== 'Home') {
      this.props.dispatch(NavigationActions.back())
      return true
    }
    return false
  }

  render() {
    const { dispatch, app, router } = this.props
    if (app.loading) return <Loading />

    const navigation = addNavigationHelpers({
      dispatch,
      state: router,
      addListener
    })
    return <AppNavigator navigation={navigation} />
  }
}

export function routerReducer(state, action = {}) {
  return AppNavigator.router.getStateForAction(action, state)
}

Router = codePush(
  {
    checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
    installMode: codePush.InstallMode.ON_NEXT_RESUME
    // updateDialog: {
    //   appendReleaseDescription: true,

    //   descriptionPrefix: '\n\n更新内容:\n',
    //   mandatoryContinueButtonLabel: '继续',
    //   mandatoryUpdateMessage: '找到一个更新，需要立即安装',
    //   optionalIgnoreButtonLabel: '忽略',
    //   optionalInstallButtonLabel: '安装',
    //   optionalUpdateMessage: '找到一个更新，现在安装？',
    //   title: '有一个更新'
    // }
  },
  status => {
    switch (status) {
      case codePush.SyncStatus.DOWNLOADING_PACKAGE:
        // Show "downloading" modal
        Toast.show('正在下载更新...')

        break
      case codePush.SyncStatus.INSTALLING_UPDATE:
        // Hide "downloading" modal
        Toast.show('正在升级...')

        break
      case codePush.SyncStatus.UPDATE_INSTALLED:
        Toast.show('更新成功')

        break
    }
  },
  ({ receivedBytes, totalBytes }) => {
    /* Update download modal progress */
  }
)(Router)

export default Router

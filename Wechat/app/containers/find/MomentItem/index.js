import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { WingBlank, WhiteSpace } from 'antd-mobile-rn'
import { Icon } from 'react-native-elements'

import Touchable from '../../../components/Touchable'
import Divider from '../../../components/widget/Divider'

import ImagesModule from './ImagesModule'

export const MomentItem = props => {
  return (
    <Touchable {...props}>
      <View>
        {/* 微信卡片 */}
        <WhiteSpace />

        <WingBlank style={styles.containerStyle} size="sm">
          <View
            style={{
              width: 50,
              backgroundColor: 'red'
            }}
          >
            {/* 左边头像 */}
            <Image
              style={styles.avatarStyle}
              source={{
                uri:
                  'https://avatars1.githubusercontent.com/u/10321883?s=88&v=4'
              }}
            />
          </View>

          <View style={{ flex: 1, backgroundColor: 'green' }}>
            {/* 右边内容 */}

            <Text>
              {/* 用户名 */}
              1
            </Text>
            <Text>
              {/* 内容 */}
              1a'a'a
            </Text>
            <ImagesModule />

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              {/* 时间和评论区域按钮 */}
              <Text>2018年10月11日00:35:37</Text>
              <Icon
                name="message-reply-text"
                type="material-community"
                color="#97aacf"
                onPress={() => console.log('hello')}
              />
            </View>
          </View>
          {/* <Text>{JSON.stringify(props)}</Text> */}
        </WingBlank>
        <WhiteSpace />
        <Divider color="#ECECEC" />
      </View>
    </Touchable>
  )
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    flexDirection: 'row'
  },

  avatarStyle: {
    width: 40,
    height: 40
  }
})

export default MomentItem

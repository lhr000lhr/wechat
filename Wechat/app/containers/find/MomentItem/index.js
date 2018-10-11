import React from 'react'
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native'
import { WingBlank, WhiteSpace } from 'antd-mobile-rn'
import Moment from 'moment'

import { formatDate } from '../../../utils'
import Touchable from '../../../components/Touchable'
import Divider from '../../../components/widget/Divider'

import ImagesModule from './ImagesModule'
import CommentModule from './CommentModule'
import CommentWidget from './CommentWidget'

export const MomentItem = props => {
  return (
    <View {...props}>
      <View
        style={{
          backgroundColor: 'white',
          overflow: 'hidden'
        }}
      >
        {/* 微信卡片 */}
        <WhiteSpace />

        <WingBlank style={styles.containerStyle} size="md">
          <View
            style={{
              width: 50
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

          <View style={{ flex: 1, overflow: 'hidden' }}>
            {/* 右边内容 */}

            <Text style={styles.nickStyle}>
              {/* 用户名 */}
              1
            </Text>
            <WhiteSpace />
            <Text>
              {/* 内容 */}
              这是第二页第一条
            </Text>
            <WhiteSpace />

            <ImagesModule />

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                zIndex: 2
              }}
            >
              {/* 时间和评论区域按钮 */}
              <Text style={{ color: 'gray', fontSize: 12 }}>
                {formatDate('2018-10-11 10:22:49')}
              </Text>

              <CommentWidget />
            </View>

            <CommentModule style={{ zIndex: 1 }} />
          </View>
          {/* <Text>{JSON.stringify(props)}</Text> */}
        </WingBlank>
        <WhiteSpace />
        <Divider color="#f2f2f2" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white'
  },

  avatarStyle: {
    width: 40,
    height: 40,
    backgroundColor: '#f0f0f0'
  },
  nickStyle: {
    color: '#516794',
    fontWeight: 'bold'
  }
})

export default MomentItem

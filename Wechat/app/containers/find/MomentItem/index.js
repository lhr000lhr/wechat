import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { WingBlank, WhiteSpace } from 'antd-mobile-rn'
import Moment from 'moment'

import { formatDate } from '../../../utils'
import Touchable from '../../../components/Touchable'
import Divider from '../../../components/widget/Divider'

import ImagesModule from './ImagesModule'
import CommentModule from './CommentModule'
import CommentWidget from './CommentWidget'

import { from } from 'rxjs/observable/from'

export const MomentItem = props => {
  return (
    <View {...props}>
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
              <Text>{formatDate('2018-10-11 10:22:49')}</Text>

              <CommentWidget />
            </View>

            <CommentModule />
          </View>
          {/* <Text>{JSON.stringify(props)}</Text> */}
        </WingBlank>
        <WhiteSpace />
        <Divider color="#ECECEC" />
      </View>
    </View>
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

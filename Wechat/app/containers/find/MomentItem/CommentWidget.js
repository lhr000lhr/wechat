import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import { Icon } from 'react-native-elements'

import { WingBlank, WhiteSpace } from 'antd-mobile-rn'
import _ from 'lodash'

const { height, width } = Dimensions.get('window')

const picWidth = (width - 80) / 3

import Divider from '../../../components/widget/Divider'

const images = [
  'https://avatars1.githubusercontent.com/u/10321883?s=88&v=4',
  'https://avatars1.githubusercontent.com/u/10321883?s=88&v=4',
  'https://avatars1.githubusercontent.com/u/10321883?s=88&v=4',
  'https://avatars1.githubusercontent.com/u/10321883?s=88&v=4',
  'https://avatars1.githubusercontent.com/u/10321883?s=88&v=4',
  'https://avatars1.githubusercontent.com/u/10321883?s=88&v=4',
  'https://avatars1.githubusercontent.com/u/10321883?s=88&v=4'
]

export const CommentModule = props => {
  return (
    <View {...props} style={{ flexDirection: 'row' }}>
      <View style={styles.containerStyle}>
        <View
          style={{
            borderRadius: 4,
            backgroundColor: 'red',
            overflow: 'hidden',
            flexDirection: 'row',
            shadowOffset: {
              width: 2,
              height: 2
            }
          }}
        >
          <View style={styles.childContainerStyle}>
            {/* 赞 */}

            <Text style={styles.textStyle}>赞</Text>
          </View>
          <Divider color="#3e4347" orientation="vertical" />

          <View style={styles.childContainerStyle}>
            {/* 评论 */}

            <Text style={styles.textStyle}>评论</Text>
          </View>
        </View>
        <Icon
          name="message-reply-text"
          type="material-community"
          color="#97aacf"
          onPress={() => console.log('hello')}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow'
  },
  childContainerStyle: {
    width: 90,
    height: 40,
    backgroundColor: '#4b5154',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    color: 'white'
  }
})

export default CommentModule

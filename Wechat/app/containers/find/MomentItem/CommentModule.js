import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import { WingBlank, WhiteSpace } from 'antd-mobile-rn'
import _ from 'lodash'

const { height, width } = Dimensions.get('window')
const fixedEdge = 80
const picWidth = (width - fixedEdge) / 3

import Touchable from '../../../components/Touchable'

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
    <View {...props}>
      {/* <Image
        style={{ width: 75, height: 75 }}
        source={{
          uri: 'https://avatars1.githubusercontent.com/u/10321883?s=88&v=4'
        }}
      /> */}
      <View style={styles.containerStyle}>
        {_.map(images, (image, index) => {
          return (
            <View style={{ marginRight: 4 }}>
              <Touchable>
                <Image
                  style={{ width: picWidth, height: picWidth }}
                  source={{
                    uri: image
                  }}
                />
              </Touchable>

              <WhiteSpace size="xs" />
            </View>
          )
        })}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: picWidth * 4
  },

  avatarStyle: {
    width: 40,
    height: 40
  }
})

export default CommentModule

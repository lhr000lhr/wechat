import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { WingBlank, WhiteSpace } from 'antd-mobile-rn'
import _ from 'lodash'

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

export const ImagesContent = props => {
  return (
    <Touchable {...props}>
      {/* <Image
        style={{ width: 75, height: 75 }}
        source={{
          uri: 'https://avatars1.githubusercontent.com/u/10321883?s=88&v=4'
        }}
      /> */}
      <View style={styles.containerStyle}>
        {_.map(images, (image, index) => {
          return (
            <View style={{ marginRight: 8 }}>
              <Image
                style={{ width: 75, height: 75 }}
                source={{
                  uri: image
                }}
              />
              <WhiteSpace />
            </View>
          )
        })}
      </View>
    </Touchable>
  )
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: 85 * 3
  },

  avatarStyle: {
    width: 40,
    height: 40
  }
})

export default ImagesContent

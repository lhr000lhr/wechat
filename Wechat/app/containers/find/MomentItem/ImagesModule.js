import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableHighlight
} from 'react-native'
import { WingBlank, WhiteSpace } from 'antd-mobile-rn'
import _ from 'lodash'

const { height, width } = Dimensions.get('window')

const picWidth = 80
import Touchable from '../../../components/Touchable'

// const images = [
//   'https://avatars1.githubusercontent.com/u/10321883?s=88&v=4',
//   'https://avatars1.githubusercontent.com/u/10321883?s=88&v=4',
//   'https://avatars1.githubusercontent.com/u/10321883?s=88&v=4',
//   'https://avatars1.githubusercontent.com/u/10321883?s=88&v=4',
//   'https://avatars1.githubusercontent.com/u/10321883?s=88&v=4',
//   'https://avatars1.githubusercontent.com/u/10321883?s=88&v=4',
//   'https://avatars1.githubusercontent.com/u/10321883?s=88&v=4'
// ]

export const ImagesContent = props => {
  const { images } = props
  return (
    <View {...props}>
      <View style={styles.containerStyle}>
        {_.map(images, (image, index) => {
          return (
            <View key={index} style={{ marginRight: 4 }}>
              <TouchableHighlight
                onPress={() => {
                  alert()
                }}
              >
                <Image
                  style={{
                    width: picWidth,
                    height: picWidth,
                    backgroundColor: '#f0f0f0'
                  }}
                  source={{
                    uri: image['url']
                  }}
                />
              </TouchableHighlight>

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

export default ImagesContent

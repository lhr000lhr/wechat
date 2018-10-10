import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

import Touchable from '../Touchable'

export const CarouselIcon = ({ dataItem }) => (
  <View style={styles.container}>
    <Image source={dataItem.icon} style={styles.imageStyle} />
    <Text style={styles.textStyle}>{dataItem.text}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  imageStyle: {
    width: 27,
    height: 27,
  },
  textStyle: {
    fontSize: 13,
    color: '#FB641A',
    marginTop: 15,
  },
})

export default CarouselIcon

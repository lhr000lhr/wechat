import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Touchable from '../Touchable'

export const Grade = ({ text, style, textStyle, ...rest }) => (
  <Touchable style={[styles.button, style]} {...rest}>
    <View>
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </View>
  </Touchable>
)

const styles = StyleSheet.create({
  button: {
    flexDirection: 'column',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: StyleSheet.hairlineWidth,
    width: 50,
    height: 20,
  },
  text: {
    color: 'white',
  },
})

export default Grade

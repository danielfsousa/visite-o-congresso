import React from 'react'
import { Text, StyleSheet } from 'react-native'

import { Fonts, Colors } from '../constants'

const Title = props => (
  <Text
    {...props}
    style={[styles.title, props.style]}
  />
)

const Label = props => (
  <Text
    {...props}
    style={[styles.label, props.style]}
  />
)

const styles = StyleSheet.create({
  title: {
    fontFamily: Fonts.bold,
    fontSize: Fonts.big,
    color: Colors.text
  },

  label: {
    fontFamily: Fonts.regular,
    fontSize: Fonts.medium,
    color: Colors.text,
    textAlign: 'center'
  }
})

export { Title, Label }

import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

import { Colors, Fonts, Layout } from '../constants'

const Button = props => (
  <TouchableOpacity
    {...props}
    style={[
      styles.container,
      props.style,
      props.type === 'large' ? styles.large : styles.normal
    ]}
  >
    <Text style={styles.text}>{props.children.toUpperCase()}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: Layout.padding,
    borderRadius: Layout.borderRadius,
    backgroundColor: Colors.primaryColor
  },

  normal: {
    height: 50,
    width: 150
  },

  large: {
    height: 55,
    width: Layout.width - Layout.padding * 2
  },

  text: {
    fontFamily: Fonts.bold,
    fontSize: Fonts.small,
    color: Colors.text,
    letterSpacing: 1.1
  }
})

export default Button
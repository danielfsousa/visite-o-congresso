import React from 'react'
import { StyleSheet, View, Image } from 'react-native'

import { Colors, Layout } from '../constants'
import { SubTitle } from './StyledText'

// const getFloatStyle = float =>
//   (float === 'left' ? styles.floatLeft : styles.floatRight)

const StyledImage = ({ float = 'right', image, caption }) => (
  <View style={{ flex: 1, alignItems: 'flex-end' }}>
    <Image style={styles.view} source={image} />
    <SubTitle style={styles.caption}>{caption}</SubTitle>
  </View>
)

const styles = StyleSheet.create({
  view: {
    backgroundColor: 'blue',
    height: 190,
    width: '90%',
    alignSelf: 'flex-end',
    position: 'relative',
    right: -20,
    marginBottom: 50,
    borderTopLeftRadius: Layout.borderRadius,
    borderBottomLeftRadius: Layout.borderRadius
  },

  caption: {
    width: '100%',
    height: '100%',
    zIndex: 2,
    position: 'absolute',
    left: '9%',
    bottom: -190 + 53
  },

  floatLeft: {
    left: 0,
    borderTopRightRadius: Layout.borderRadius,
    borderBottomRightRadius: Layout.borderRadius
  },

  floatRight: {
    right: 0,
    borderTopLeftRadius: Layout.borderRadius,
    borderBottomLeftRadius: Layout.borderRadius
  },

  containerStyle: {
    alignItems: 'flex-end',
    position: 'absolute',
    left: 0
  },

  background: {
    height: 230,
    width: '50%',
    alignItems: 'flex-end'
  },

  image: {
    height: 190,
    width: '50%'
  },

  overlay: {
    height: 190,
    width: '50%',
    backgroundColor: Colors.rgba(Colors.primary, 30)
  }
})

export default StyledImage

import React from 'react'
import { View, ImageBackground, StyleSheet } from 'react-native'

import { Colors } from '../constants'

const BackgroundImage = ({
  style,
  imageStyle,
  overlayStyle,
  containerStyle,
  source,
  children
}) => (
  <View style={styles.container}>
    <ImageBackground
      source={source}
      style={[styles.imageBackground]}
      imageStyle={imageStyle}
    >
      <View style={[styles.overlay, overlayStyle]} />
      <View style={style}>
        {children}
      </View>
    </ImageBackground>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    ...StyleSheet.absoluteFillObject
  },

  overlay: {
    flex: 1,
    ...StyleSheet.absoluteFillObject
  },

  imageBackground: {
    width: '100%',
    height: '100%'
  }
})

export default BackgroundImage

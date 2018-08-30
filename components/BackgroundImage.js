import React from 'react'
import { View, ImageBackground, StyleSheet } from 'react-native'

const BackgroundImage = ({
  style,
  imageStyle,
  overlayStyle,
  source,
  children
}) => (
  <View style={[styles.container, style]}>
    <ImageBackground
      source={source}
      style={[styles.imageBackground, style]}
      imageStyle={imageStyle}
    >
      <View style={[styles.overlay, overlayStyle]} />
      {children}
    </ImageBackground>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

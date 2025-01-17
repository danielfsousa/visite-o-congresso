import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'

import { Colors, Layout } from '../constants'
import BackgroundImage from './BackgroundImage'
import { Label } from './StyledText'

const Banner = ({ name, image, onBannerPress }) => (
  <TouchableOpacity onPress={onBannerPress} style={styles.container}>
    <BackgroundImage
      source={image}
      style={styles.background}
      imageStyle={styles.image}
      overlayStyle={styles.overlay}
    >
      <Label style={styles.label}>{name}</Label>
    </BackgroundImage>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    height: Layout.bannerHeight,
    width: Layout.bannerWidth,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: Layout.padding,
    marginBottom: Layout.padding,
    borderRadius: Layout.borderRadius,
    backgroundColor: Colors.tilesBackground
  },

  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Layout.borderRadius
  },

  image: {
    borderRadius: Layout.borderRadius
  },

  overlay: {
    borderRadius: Layout.borderRadius,
    backgroundColor: Colors.rgba(Colors.primary, 30)
  },

  label: {
    textShadowColor: 'rgba(0, 0, 0, 0.70)',
    textShadowOffset: { width: 0, height: 3 },
    textShadowRadius: 10
  }
})

export default Banner
